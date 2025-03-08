import { daysOfOneMonth } from "@/lib/days";
import { getEngToBn } from "@/utils/en-to-bn";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosCheckmark } from "react-icons/io";

const SleepingTable = () => {
  const [progress, setProgress] = useState(
    Array(4).fill(Array(daysOfOneMonth.length).fill(false))
  );

  const toggleProgress = (rowIndex, dayIndex) => {
    setProgress((prev) => {
      const newState = prev.map((row, rIdx) =>
        rIdx === rowIndex
          ? row.map((day, dIdx) => (dIdx === dayIndex ? !day : day))
          : row
      );
      return newState;
    });
  };

  return (
    <div className="mb-2 bg-gray-50 shadow-md rounded-xl overflow-x-auto scrollbar">
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ঘুমের আমল</th>
            {daysOfOneMonth.map((ind) => (
              <th key={ind} className="border px-2 py-1 text-sm">
                {getEngToBn(ind)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            "সুরা মুলক",
            "ইখলাস, ফালাক, নাস",
            "আয়াতুল কুরসী",
            "সূরা বাকারার শেষ দুই আয়াত",
          ].map((amal, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border px-4 py-2 font-medium">{amal}</td>
              {daysOfOneMonth.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className="border px-2 py-1 cursor-pointer hover:bg-gray-100 text-sm"
                  onClick={() => toggleProgress(rowIndex, dayIndex)}
                >
                  {progress[rowIndex][dayIndex] ? (
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

export default SleepingTable;
