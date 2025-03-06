import { daysOfOneMonth } from "@/lib/days";
import { getEngToBn } from "@/utils/en-to-bn";
import { useState } from "react";

const DawahTable = () => {
  const [progress, setProgress] = useState(
    Array(2).fill(Array(daysOfOneMonth.length).fill(false))
  );
  const [numbers, setNumbers] = useState(Array(daysOfOneMonth.length).fill(""));

  const toggleProgress = (rowIndex, dayIndex) => {
    setProgress((prev) =>
      prev.map((row, rIdx) =>
        rIdx === rowIndex
          ? row.map((day, dIdx) => (dIdx === dayIndex ? !day : day))
          : row
      )
    );
  };

  const handleNumberChange = (dayIndex, value) => {
    setNumbers((prev) =>
      prev.map((num, idx) => (idx === dayIndex ? value : num))
    );
  };

  return (
    <div className="mb-2 bg-gray-50 shadow-md rounded-lg overflow-x-auto scrollbar">
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">দাওয়াহ</th>
            {daysOfOneMonth.map((ind) => (
              <th key={ind} className="border px-2 py-1 text-sm">
                {getEngToBn(ind)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {["দৈনিক দাওয়াত"].map((amal, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border px-4 py-2 font-medium">{amal}</td>
              {daysOfOneMonth.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className="border px-2 py-1 cursor-pointer hover:bg-gray-100 text-sm"
                  onClick={() => toggleProgress(rowIndex, dayIndex)}
                >
                  {progress[rowIndex][dayIndex] ? "✅" : "❌"}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="border px-4 py-2 font-medium">সংখ্যা</td>
            {daysOfOneMonth.map((day, dayIndex) => (
              <td key={dayIndex} className="border px-2 py-1">
                ৩
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DawahTable;
