import React from "react";

const IlmSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">ইলম সেকশন</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-700">আজকে ইলম শিখেছেন?</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* নোট */}
        <div className="border-b pb-4">
          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="নোট লিখুন..."
            rows="4"
          />
        </div>

        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-700">সাপ্তাহিক ইলমী মজলিশে বসেছেন?</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* নোট */}
        <div className="border-b pb-4">
          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="নোট লিখুন..."
            rows="4"
          />
        </div>
      </div>
    </div>
  );
};

export default IlmSection;
