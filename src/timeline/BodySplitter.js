import React from "react";
import { months } from "./CONSTANTS";

const BodySplitter = ({ partsToSplitInto, globalMonth }) => {
  const Dividers = () => {
    const weekends = setupWeekends();
    const dividers = [];
    for (let i = 0; i < partsToSplitInto; i++) {
      if (partsToSplitInto !== 12) {
        dividers.push(
          <div
            key={i}
            style={{ zIndex: "-10" }}
            className={`w-full h-full border-r border-l border-gray-100 ${
              weekends.includes(i) ? "bg-gray-100 border-gray-200" : ""
            }`}
          />
        );
      } else {
        const month_string = i < 9 ? `0${i + 1}` : `${i + 1}`;
        const current_month = months.find(
          (month) => month.numerical_expression === month_string
        );
        const divider_width = ((current_month.days / 365) * 100).toFixed(3);
        dividers.push(
          <div
            key={i}
            style={{ zIndex: "-10", width: `${divider_width}%` }}
            className="h-full border-r border-l border-gray-200"
          />
        );
      }
    }
    return dividers;
  };

  const setupWeekends = () => {
    if (!globalMonth) return [];

    const currentMonth = months.find(
      (mnth) => mnth.numerical_expression === globalMonth
    );
    const currentMonthsDays = currentMonth.days;
    const allMonthWeekends = [];

    for (let i = 0; i < currentMonthsDays; i++) {
      const dateObjectOfFirstMonthsDay = new Date(
        `${new Date().getFullYear()}.${currentMonth.numerical_expression}.${
          i + 1
        }`
      );
      if (dateObjectOfFirstMonthsDay.getDay() % 6 === 0) {
        allMonthWeekends.push(i);
      }
    }
    return allMonthWeekends;
  };

  return (
    <div className="w-full h-full flex">
      <Dividers />
    </div>
  );
};

export default BodySplitter;
