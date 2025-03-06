import { daysOfOneMonth } from "@/lib/days";
import { getEngToBn } from "@/utils/en-to-bn";
import { useState } from "react";

const Siyamtable = () => {
  const [fasting, setFasting] = useState(
    Array(daysOfOneMonth.length).fill(false)
  );

  const toggleFasting = (index) => {
    setFasting((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="mb-2 bg-gray-50 shadow-md rounded-lg">
      <div className="overflow-x-auto scrollbar">
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">রোযা</th>
              {daysOfOneMonth.map((ind) => (
                <th key={ind} className="border px-2 py-1">
                  {getEngToBn(ind)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-medium">রোযা</td>
              {daysOfOneMonth.map((day, index) => (
                <td
                  key={index}
                  className="border px-2 py-1 cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleFasting(index)}
                >
                  {fasting[index] ? "✅" : "❌"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Siyamtable;
