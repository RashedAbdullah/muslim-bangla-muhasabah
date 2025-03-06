import { daysOfOneMonth } from "@/lib/days";
import { getEngToBn } from "@/utils/en-to-bn";

const MuamalahTable = () => {
  return (
    <div className="mb-3">
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th className="border px-4 py-2">মুআমালাহ মুআশারাত</th>
            {daysOfOneMonth.map((ind) => (
              <th key={ind} className="border px-4 py-2">
                {getEngToBn(ind)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {["মিথ্যা কথা", "গীবত", "প্রতারণা"].map((quran, ind) => (
            <tr key={ind}>
              <td className="border px-4 py-2">{quran}</td>
              {daysOfOneMonth.map((day, index) => (
                <td key={index} className="border px-4 py-2">
                  ✅
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MuamalahTable;
