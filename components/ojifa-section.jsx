import { MdArrowOutward } from "react-icons/md";
import React from "react";
import { FaLink } from "react-icons/fa";

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
              <FaLink color="green" />
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

        <div className="flex items-center gap-2">
          <p className="text-lg text-gray-700 font-bold">সকাল-সন্ধ্যার আমল</p>
          <a target="_blank" href="https://muslimbangla.com/dua-category/28">
            <FaLink color="green" />
          </a>
        </div>
        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700">ফজরের আমল </p>

          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <p className="text-lg text-gray-700">মাগরিরের আমল</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="flex justify-between items-center ">
          <p className="text-lg text-gray-700 font-bold">জুম’আর আমল</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-lg text-gray-700">৮০ বার দরুদ শরীফ</p>
            <a
              href="https://www.muslimbangla.com/dua/261/%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0-%E0%A6%A6%E0%A6%BF%E0%A6%A8-%E0%A6%86%E0%A6%B8%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%82%E0%A6%A6"
              target="_blank"
            >
              <FaLink color="green" />
            </a>
          </div>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center gap-2">
            <p className="text-lg text-gray-700">সুরা কাহফ</p>
            <a href="https://muslimbangla.com/quran/sura/18" target="_blank">
              <FaLink color="green" />
            </a>
          </div>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="flex justify-between items-center  ">
          <p className="text-lg text-gray-700 font-bold">ঘুমের আমল</p>
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex items-center gap-2">
            <p className="text-lg text-gray-700">সুরা মুলক</p>
            <a href="https://muslimbangla.com/quran/sura/67" target="_blank">
              <FaLink color="green" />
            </a>
          </div>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex items-center gap-2">
            <p className="text-lg text-gray-700">সুরা ইখলাস, ফালাক, নাস</p>
            <a href="https://muslimbangla.com/quran/sura/112" target="_blank">
              <FaLink color="green" />
            </a>
          </div>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center  ">
          <div className="flex items-center gap-2">
            <p className="text-lg text-gray-700">আয়াতুল কুরসী</p>
            <a href="https://muslimbangla.com/dua/1260" target="_blank">
              <FaLink color="green" />
            </a>
          </div>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center gap-2">
            {" "}
            <p className="text-lg text-gray-700">সূরা বাকারার শেষ দুই আয়াত</p>
            <a
              href="https://muslimbangla.com/dua/495/%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A6%BE-%E0%A6%AC%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%B6%E0%A7%87%E0%A6%B7-%E0%A6%A6%E0%A7%81%E0%A6%87-%E0%A6%86%E0%A7%9F%E0%A6%BE%E0%A6%A4"
              target="_blank"
            >
              <FaLink color="green" />
            </a>
          </div>
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
