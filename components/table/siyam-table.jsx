import { getEngToBn } from "@/utils/en-to-bn";
// import {
//   MdOutlineKeyboardDoubleArrowDown,
//   MdOutlineKeyboardDoubleArrowUp,
// } from "react-icons/md";

const SiyamTable = () => {
  // ডেমো ডাটা (আপনার ডাটার সাথে পরিবর্তন করতে পারেন)
  const currentMonth = 25; // বর্তমান মাসে রাখা রোযা সংখ্যা
  const lastMonth = 30; // গত মাসের সংখ্যা
  const improvement = currentMonth > lastMonth ? "উন্নতি" : "অবনতি";
  const improvementColor =
    currentMonth > lastMonth ? "text-green-600" : "text-red-600";
  // const improvementIcon =
  //   currentMonth > lastMonth ? (
  //     <MdOutlineKeyboardDoubleArrowUp color="green" />
  //   ) : (
  //     <MdOutlineKeyboardDoubleArrowDown color="red" />
  //   );

  return (
    <div className="mb-6 bg-white shadow-lg">
      <div className="overflow-x-auto scrollbar">
        <table className="table-auto w-full text-center border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-900 text-lg">
              <th className="border w-64 py-2">রোযা</th>
              <th className="border w-32 py-2">বর্তমান মাস</th>
              <th className="border w-64 py-2">উন্নতি / অবনতি</th>
              <th className="border w-32 py-2">মন্তব্য</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-200">
              <td className="border w-64 py-2 text-gray-800">রোযা</td>
              <td className="border w-32 py-2 text-gray-800">
                {getEngToBn(currentMonth)} / ৩০
              </td>
              <td className={`border-y w-64 py-2 ${improvementColor}`}>
                {improvement}
                {/* {improvementIcon} */}
              </td>
              <td className="border w-32 py-2 text-gray-800">
                {currentMonth < lastMonth ? "উন্নতি প্রয়োজন" : "ভালো চলছে"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SiyamTable;
