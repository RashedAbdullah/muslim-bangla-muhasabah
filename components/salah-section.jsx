import React, { useState } from "react";

const SalahSection = () => {
  const [completed, setCompleted] = useState({});
  const [showQuestions, setShowQuestions] = useState(false);

  const handleCheckboxChange = (salah) => {
    const updatedCompleted = {
      ...completed,
      [salah]: !completed[salah],
    };

    setCompleted(updatedCompleted);

    // যদি অন্তত একটি নামায নির্বাচিত হয়, তাহলে প্রশ্নগুলো দেখানো হবে
    setShowQuestions(Object.values(updatedCompleted).some(Boolean));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold mb-2">নামায ট্র্যাকার</h3>
      <div className="flex space-x-2 overflow-x-auto scrollbar">
        {["ফজর", "যোহর", "আছর", "মাগরিব", "ইশা"].map((salah) => (
          <label
            key={salah}
            htmlFor={salah}
            className={`p-4 rounded-xl min-w-[100px] text-center flex items-center gap-2 cursor-pointer transition ${
              completed[salah] ? "bg-green-600 text-white" : "bg-gray-100"
            }`}
          >
            <input
              id={salah}
              type="checkbox"
              checked={completed[salah]}
              onChange={() => handleCheckboxChange(salah)}
              className="hidden"
            />
            <div className="w-5 h-5 border border-gray-400 flex justify-center items-center rounded">
              {completed[salah] && <span className="text-white">✔</span>}
            </div>
            <p>{salah}</p>
          </label>
        ))}
      </div>

      {/* <div className="flex justify-between items-center">
          <p className="text-gray-700">ইশরাকের নামাজ</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
            // onChange={handleFastingCheck}
          />
        </div> */}

      {/* <div className="flex justify-between items-center">
          <p className="text-gray-700">চাশতের নামাজ</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
            // onChange={handleFastingCheck}
          />
        </div> */}

      {/* <div className="flex justify-between items-center">
          <p className="text-gray-700">তাহাজ্জুদের নামাজ</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
            // onChange={handleFastingCheck}
          />
        </div> */}

      {/* {showQuestions && (
        <div className="py-2 mt-4 bg-gray-100 p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">জামাতের সাথে আদায় করেছন? (পুরুষ)</p>
            <div className="flex gap-5">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                হ্যাঁ
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                না
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-700">আওয়াল ওয়াক্তে আদায় করেছেন? (মহিলা)</p>
            <div className="flex gap-5">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                হ্যাঁ
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                না
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-700">সুন্নত সহ আদায় করেছন?</p>
            <div className="flex gap-5">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                হ্যাঁ
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                না
              </label>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SalahSection;
