import { getEngToBn } from "@/utils/en-to-bn";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";

const QuranTableSection = () => {
  // ডাটা ডাইনামিক করার জন্য বর্তমান ও বিগত মাসের তথ্য
  const quranData = [
    { name: "তিলাওয়াত", current: 25, last: 30, showBoth: true },
    { name: "পৃষ্ঠা সংখ্যা", current: 28, last: 31, showBoth: false },
    { name: "আয়াত সংখ্যা", current: 100, last: 90, showBoth: false },
  ];

  return (
    <div className="mb-6 bg-white shadow-lg overflow-x-auto scrollbar">
      <table className="table-auto w-full text-center border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-900 text-lg">
            <th className="border w-64 py-2">কুরআন</th>
            <th className="border w-32 py-2">বর্তমান মাস</th>
            <th className="border w-32 py-2">বিগত মাস</th>
            <th className="border w-32 py-2">উন্নতি / অবনতি</th>
            <th className="border w-32 py-2">মন্তব্য</th>
          </tr>
        </thead>
        <tbody>
          {quranData.map((item, index) => {
            const improvement = item.current > item.last ? "উন্নতি" : "অবনতি";
            const improvementColor =
              item.current > item.last ? "text-green-600" : "text-red-600";
            const improvementIcon =
              item.current > item.last ? (
                <MdOutlineKeyboardDoubleArrowUp color="green" />
              ) : (
                <MdOutlineKeyboardDoubleArrowDown color="red" />
              );

            return (
              <tr
                key={index}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="border w-64 py-2 text-gray-800">{item.name}</td>
                {/* তিলাওয়াত হলে ২৫ / ৩০ দেখাবে, নাহলে শুধু সংখ্যা */}
                <td className="border w-32 py-2 text-gray-800">
                  {item.showBoth
                    ? `${getEngToBn(item.current)} / ${getEngToBn(item.last)}`
                    : getEngToBn(item.current)}
                </td>
                <td className="border w-32 py-2 text-gray-800">
                  {getEngToBn(item.last)}
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

export default QuranTableSection;
