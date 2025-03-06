import { MdArrowOutward } from "react-icons/md";
import React from "react";

const OjifaSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">অজিফা সেকশন</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center align-middle gap-3">
            <p className="text-lg text-gray-700">আজকে কুরআন তিলাওয়াত করেছেন?</p>
            <a
              href="https://muslimbangla.com/quran"
              target="_blank"
              className="flex  justify-center items-center gap-1 underline"
            >
              {" "}
              করুন
              <MdArrowOutward />
            </a>
          </div>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700">আয়াত সংখ্যা</p>
          <input
            type="number"
            className="max-w-[120px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="সংখ্যা"
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

        <div className="">
          <p className="text-lg text-gray-700 font-bold">সকাল-সন্ধ্যার আমল</p>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center align-middle gap-3">
            <p className="text-lg text-gray-700">ফজরের আমল </p>
            <a
              href=""
              target="_blank"
              className="flex  justify-center items-center gap-1 underline"
            >
              {" "}
              দেখুন
              <MdArrowOutward />
            </a>
          </div>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex justify-center items-center align-middle gap-3">
            <p className="text-lg text-gray-700">মাগরিরের আমল</p>
            <a
              href=""
              target="_blank"
              className="flex  justify-center items-center gap-1 underline"
            >
              {" "}
              দেখুন
              <MdArrowOutward />
            </a>
          </div>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700 font-bold">জুম’আর আমল</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-700">৮০ বার দরুদ শরীফ</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-lg text-gray-700">সুরা কাহফ</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="flex justify-between items-center  ">
          <p className="text-lg text-gray-700 font-bold">ঘুমের আমল</p>
        </div>
        <div className="flex justify-between items-center  ">
          <p className="text-lg text-gray-700">সুরা মুলক</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center  ">
          <p className="text-lg text-gray-700">সুরা ইখলাস, ফালাক, নাস</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center  ">
          <p className="text-lg text-gray-700">আয়াতুল কুরসী</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center pb-4">
          <p className="text-lg text-gray-700">সূরা বাকারার শেষ দুই আয়াত</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default OjifaSection;
