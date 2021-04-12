import React, { useState } from "react";
import { months } from "./CONSTANTS";

const Header = ({
  globalYear,
  newGlobalYear,
  globalMonth,
  newGlobalMonth,
  possibleYears,
}) => {
  const [showYearOptions, setShowYearOptions] = useState(false);
  const MonthDays = () => {
    if (globalMonth) {
      const days = [];
      const currentMonthDetails = months.find(
        (month) => month.numerical_expression === globalMonth
      );
      for (let i = 1; i <= currentMonthDetails.days; i++) {
        days.push(
          <div
            className="w-full text-xs p-1 flex justify-center items-center"
            key={i}
          >
            {i}
          </div>
        );
      }
      return days;
    }
  };

  return (
    <div className="flex select-none shadow-md z-50 min-w-max bg-white">
      <div className="relative flex w-full border-b border-gray-400">
        <div
          onClick={() => setShowYearOptions(!showYearOptions)}
          className="w-40 flex-shrink-0 transition duration-100 border-gray-200 flex justify-center items-center font-bold cursor-pointer select-none hover:bg-gray-100"
        >
          {globalYear}
          {showYearOptions && (
            <div className="absolute divide-y left-0 top-10 z-50 bg-white border shadow w-40">
              {possibleYears.map((year) => (
                <div
                  key={year}
                  onClick={() => {
                    setShowYearOptions(false);
                    newGlobalYear(year);
                  }}
                  className="flex justify-center items-center p-2 hover:bg-gray-50 cursor-pointer w-full"
                >
                  {year}
                </div>
              ))}
              <div className="w-full"></div>
            </div>
          )}
        </div>
        <div className="w-full">
          <div className="flex border-r w-full">
            {months.map((month) => (
              <div
                key={month.numerical_expression}
                style={{ width: `${(month.days * 100) / 365}%` }}
                className={`transition duration-100 flex justify-center items-center cursor-pointer p-2 border-gray-400 hover:bg-gray-100 ${
                  globalMonth === month.numerical_expression &&
                  "hover:bg-none border-l font-bold"
                } ${
                  month.numerical_expression !== "12" &&
                  globalMonth === month.numerical_expression &&
                  "border-r"
                } ${
                  globalMonth &&
                  globalMonth !== month.numerical_expression &&
                  "border-b"
                }`}
                onClick={() => {
                  if (globalMonth === month.numerical_expression) {
                    newGlobalMonth(null);
                  } else {
                    newGlobalMonth(month.numerical_expression);
                  }
                }}
              >
                {month.short_name_letters}
              </div>
            ))}
          </div>
          <div className="flex border-l border-gray-400">
            {globalMonth && <MonthDays />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
