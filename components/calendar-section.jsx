import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { getEngToBn } from "@/utils/en-to-bn";

const CalendarSection = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const getDayName = (date) => {
    const dayNames = [
      "রবিবার",
      "সোমবার",
      "মঙ্গলবার",
      "বুধবার",
      "বৃহস্পতিবার",
      "শুক্রবার",
      "শনিবার",
    ];
    const dayIndex = new Date(selectedYear, selectedMonth, date).getDay();
    return dayNames[dayIndex];
  };

  const getDaysInMonth = () => {
    return new Date(selectedYear, selectedMonth + 1, 0).getDate();
  };

  const changeMonth = (increment) => {
    const newMonth = selectedMonth + increment;
    // Disable future months
    if (newMonth > currentMonth && selectedYear === currentYear) return;
    if (newMonth < 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else if (newMonth > 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(newMonth);
    }
  };

  const options = { year: "numeric", month: "long" };

  // Check if next month is disabled
  const isNextMonthDisabled =
    selectedYear === currentYear && selectedMonth === currentMonth;

  return (
    <div className="space-y-5">
      {/* মাস ও বছর নির্বাচন */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => changeMonth(-1)}
          className="p-3 rounded-full bg-green-500 text-white shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-110 focus:ring focus:ring-green-300"
        >
          <IoChevronBack size={24} />
        </button>

        <h3 className="text-lg font-semibold text-gray-900 bg-gray-200 px-6 py-3 rounded-lg shadow-md">
          {new Date(
            selectedYear,
            selectedMonth,
            selectedDate
          ).toLocaleDateString("bn", {
            ...options,
            day: "numeric",
          })}
        </h3>

        <button
          onClick={() => changeMonth(1)}
          className={`p-3 rounded-full ${
            isNextMonthDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 text-white"
          } shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-110 focus:ring focus:ring-green-300`}
          disabled={isNextMonthDisabled}
        >
          <IoChevronForward size={24} />
        </button>
      </div>

      {/* ক্যালেন্ডার */}
      <div className="overflow-x-auto scrollbar">
        <div className="flex gap-2 text-center text-lg w-max">
          {[...Array(getDaysInMonth())].map((_, i) => {
            const date = i + 1;
            // Disable future dates
            const isDisabled =
              selectedYear === currentYear &&
              selectedMonth === currentMonth &&
              date > currentDay;

            return (
              <div
                key={date}
                onClick={() => !isDisabled && setSelectedDate(date)}
                className={`px-5 py-3 rounded-lg cursor-pointer transition-all duration-300 text-center shadow-md ${
                  selectedDate === date
                    ? "bg-green-600 text-white font-bold transform scale-110"
                    : isDisabled
                    ? "bg-gray-100 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="block text-sm text-white">
                  {selectedDate === date && getDayName(selectedDate)}
                </span>
                <span className="text-lg">{getEngToBn(date)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
