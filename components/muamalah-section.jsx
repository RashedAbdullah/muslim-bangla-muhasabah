import React from "react";

const MuamalahSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">
        মুআমালাহ-মুআশারাত সেকশন
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700">আজকে মিথ্যা কথা বলেছেন?</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700">আজকে কারো গীবত করেছেন?</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700">
            আজকে কারো সাথে প্রতারণা করেছেন?
          </p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default MuamalahSection;
