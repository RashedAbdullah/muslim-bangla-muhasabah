import { getEngToBn } from "@/utils/en-to-bn";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";

const SalahTable = () => {
  return (
    <div className="mb-6">
      <div className="overflow-x-auto scrollbar shadow-lg rounded-lg">
        <table className="table-auto w-full border border-gray-300 text-center bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-900 text-lg">
              <th className="border px-5 py-2">নামাজ</th>
              <th className="border px-5 py-2">বর্তমান মাস</th>
              <th className="border px-5 py-2">বিগত মাস</th>
              <th className="border px-5 py-2">উন্নতি / অবনতি</th>
              <th className="border px-5 py-2">মন্তব্য</th>
            </tr>
          </thead>
          <tbody>
            {["ফজর", "যোহর", "আছর", "মাগরিব", "ইশা"].map((salah, index) => {
              const currentMonth = index % 2 === 0 ? 25 : 30; // ডেমো ডাটা
              const lastMonth = index % 2 === 0 ? 30 : 28; // ডেমো ডাটা
              const improvement = currentMonth > lastMonth ? "উন্নতি" : "অবনতি";
              const improvementColor =
                currentMonth > lastMonth ? "text-green-600" : "text-red-600";
              const improvementIcon =
                currentMonth > lastMonth ? (
                  <MdOutlineKeyboardDoubleArrowUp color="green" />
                ) : (
                  <MdOutlineKeyboardDoubleArrowDown color="red" />
                );

              return (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="border px-5 py-2 text-gray-800">{salah}</td>
                  <td className="border px-5 py-2 text-gray-800">
                    {getEngToBn(currentMonth)} / ৩০
                  </td>
                  <td className="border px-5 py-2 text-gray-800">
                    {getEngToBn(lastMonth)} / ৩১
                  </td>
                  <td
                    className={`border-y px-5 py-2 flex items-center gap-2 justify-center ${improvementColor}`}
                  >
                    {improvement} {improvementIcon}
                  </td>
                  <td className="border px-5 py-2 text-gray-800">
                    {currentMonth < lastMonth ? "উন্নতি প্রয়োজন" : "ভালো চলছে"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalahTable;
