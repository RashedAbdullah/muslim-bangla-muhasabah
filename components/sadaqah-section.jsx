import React from "react";

const SadaqahSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">দৈনিক সাদাকাহ</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2">
          <p className="text-lg text-gray-700">আজকে সাদাকাহ আদায় করেছেন?</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <button className="text-lg bg-gray-700 text-white py-2 px-4 rounded-xl">
            ডোনেশন
          </button>
          <input
            type="number"
            className="max-w-[120px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="পরিমাণ"
          />
        </div>
      </div>
    </div>
  );
};

export default SadaqahSection;
