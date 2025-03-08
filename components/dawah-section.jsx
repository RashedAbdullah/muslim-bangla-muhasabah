import React from "react";

const DawahSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">দাওয়াহ সেকশন</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700">আজকে দাওয়াত দিয়েছেন?</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* কতজনকে দিয়েছেন? */}
        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700">কতজনকে দিয়েছেন?</p>
          <input
            type="number"
            className="max-w-[120px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="সংখ্যা"
          />
        </div>

        {/* নোট */}
        <div className="">
          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="নোট লিখুন..."
            rows="3"
          />
        </div>
      </div>
    </div>
  );
};

export default DawahSection;
