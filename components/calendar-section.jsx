import React, { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { getEngToBn } from "@/utils/en-to-bn";

const CalendarSection = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // State to track selected date, month, year
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Function to get the name of the day in Bangla
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

  // Function to get number of days in the selected month
  const getDaysInMonth = () => {
    return new Date(selectedYear, selectedMonth + 1, 0).getDate();
  };

  // Function to change the month
  const changeMonth = (increment) => {
    const newMonth = selectedMonth + increment;
    if (newMonth > 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1); // Increment year when month exceeds December
    } else if (newMonth < 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1); // Decrement year when month goes below January
    } else {
      setSelectedMonth(newMonth);
    }
  };

  // Function to change the year
  const changeYear = (increment) => {
    setSelectedYear(selectedYear + increment);
  };

  const options = { year: "numeric", month: "long" };

  return (
    <div className="space-y-5">
      <div className="text-2xl text-green-600 font-bold flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          {/* Show current month and year with navigation buttons */}
          <button
            onClick={() => changeMonth(-1)}
            className="mr-4 p-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          >
            {"<"}
          </button>
          <h3 className="text-xl font-medium text-gray-800">
            {new Date(selectedYear, selectedMonth).toLocaleDateString(
              "bn",
              options
            )}
          </h3>
          <button
            onClick={() => changeMonth(1)}
            className="ml-4 p-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          >
            {">"}
          </button>
        </div>

        {/* <div>
          <IoCalendarOutline />
        </div> */}
      </div>

      {/* ক্যালেন্ডার */}
      <div className="overflow-x-auto scrollbar">
        <div className="flex gap-2 text-center text-lg w-max">
          {[...Array(getDaysInMonth())].map((_, i) => {
            const date = i + 1;
            return (
              <div
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-2 rounded-full cursor-pointer transition ${
                  selectedDate === date
                    ? "bg-green-600 text-white space-x-2"
                    : "bg-gray-100"
                }`}
              >
                <span>{selectedDate === date && getDayName(selectedDate)}</span>
                <span> {getEngToBn(date)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
