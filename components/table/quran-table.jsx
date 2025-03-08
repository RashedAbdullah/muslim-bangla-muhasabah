import { daysOfOneMonth } from "@/lib/days";
import { getEngToBn } from "@/utils/en-to-bn";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosCheckmark } from "react-icons/io";

const QuranTableSection = () => {
  const [quranProgress, setQuranProgress] = useState(
    Array(daysOfOneMonth.length).fill(false)
  );

  const toggleQuranProgress = (index) => {
    setQuranProgress((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="mb-2 bg-gray-50 shadow-md rounded-xl overflow-x-auto scrollbar">
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">কুরআন</th>
            {daysOfOneMonth.map((ind) => (
              <th key={ind} className="border px-2 py-1 text-sm">
                {getEngToBn(ind)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {["তিলাওয়াত", "পৃষ্ঠা", "আয়াত"].map((quran, ind) => (
            <tr key={ind}>
              <td className="border px-4 py-2 font-medium">{quran}</td>
              {daysOfOneMonth.map((day, index) => (
                <td
                  key={index}
                  className="border px-2 py-1 cursor-pointer hover:bg-gray-100 text-sm"
                  onClick={() => toggleQuranProgress(index)}
                >
                  {quranProgress[index] ? (
                    <IoIosCheckmark color="green" />
                  ) : (
                    <RxCrossCircled color="red" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuranTableSection;
