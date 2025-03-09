import { getEngToBn } from "@/utils/en-to-bn";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";

const SleepingTable = () => {
  // ঘুমের আমল সংক্রান্ত ডাটা ডাইনামিকভাবে সংরক্ষণ
  const amalData = [
    { name: "সুরা মুলক", current: 25, last: 30 },
    { name: "ইখলাস, ফালাক, নাস", current: 28, last: 31 },
    { name: "আয়াতুল কুরসী", current: 26, last: 29 },
    { name: "সূরা বাকারার শেষ দুই আয়াত", current: 27, last: 30 },
  ];

  return (
    <div className="mb-6 bg-white shadow-lg overflow-x-auto scrollbar">
      <table className="table-auto w-full text-center border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-900 text-lg">
            <th className="border w-64 py-2">ঘুমের আমল</th>
            <th className="border w-32 py-2">বর্তমান মাস</th>
            <th className="border w-32 py-2">বিগত মাস</th>
            <th className="border w-32 py-2">উন্নতি / অবনতি</th>
            <th className="border w-32 py-2">মন্তব্য</th>
          </tr>
        </thead>
        <tbody>
          {amalData.map((item, index) => {
            const improvement = item.current > item.last ? "উন্নতি" : "অবনতি";
            const improvementColor =
              item.current > item.last ? "text-green-600" : "text-red-600";
            // const improvementIcon =
            //   item.current > item.last ? (
            //     <MdOutlineKeyboardDoubleArrowUp color="green" />
            //   ) : (
            //     <MdOutlineKeyboardDoubleArrowDown color="red" />
            //   );

            return (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="border w-64 py-2 text-gray-800">{item.name}</td>
                <td className="border w-32 py-2 text-gray-800">
                  {getEngToBn(item.current)} / ৩০
                </td>
                <td className="border w-32 py-2 text-gray-800">
                  {getEngToBn(item.last)} / ৩১
                </td>
                <td className={`border w-32-y py-2 ${improvementColor}`}>
                  {improvement}
                  {/* {improvementIcon} */}
                </td>
                <td className="border w-32 py-2 text-gray-800">
                  {item.current < item.last ? "উন্নতি প্রয়োজন" : "ভালো চলছে"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SleepingTable;
