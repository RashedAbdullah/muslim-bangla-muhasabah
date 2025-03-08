// SalahTable.js
import { daysOfOneMonth } from "@/lib/days";
import { getEngToBn } from "@/utils/en-to-bn";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosCheckmark } from "react-icons/io";

const SalahTable = () => {
  const [salahData, setSalahData] = useState(
    Array(5).fill(Array(30).fill(false))
  );

  const toggleCheck = (salahIndex, dayIndex) => {
    setSalahData((prevData) => {
      const newData = prevData.map((row, i) =>
        i === salahIndex
          ? row.map((cell, j) => (j === dayIndex ? !cell : cell))
          : row
      );
      return newData;
    });
  };

  return (
    <div className="mb-2">
      <div className="overflow-x-auto scrollbar">
        <table className="table-auto w-full border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">নামাজ</th>
              {daysOfOneMonth.map((ind) => (
                <th key={ind} className="border px-2 py-2 text-sm font-medium">
                  {getEngToBn(ind)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["ফজর", "যোহর", "আছর", "মাগরিব", "ইশা"].map(
              (salah, salahIndex) => (
                <tr key={salahIndex} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 font-medium text-gray-700">
                    {salah}
                  </td>
                  {daysOfOneMonth.map((_, dayIndex) => (
                    <td
                      key={dayIndex}
                      className="border px-2 py-2 cursor-pointer text-sm"
                      onClick={() => toggleCheck(salahIndex, dayIndex)}
                    >
                      {salahData[salahIndex][dayIndex] ? (
                        <IoIosCheckmark color="green" />
                      ) : (
                        <RxCrossCircled color="red" />
                      )}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalahTable;
