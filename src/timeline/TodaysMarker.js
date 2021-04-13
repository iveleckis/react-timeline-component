import React, { useEffect, useState } from "react";
import { months } from "./CONSTANTS";

const TodaysMarker = ({ todaysDate = new Date(), globalMonth, globalYear }) => {
  const [todaysPosition, setTodaysPosition] = useState();

  useEffect(() => {
    if (globalYear === todaysDate.getFullYear() && globalMonth === null) {
      const date = new Date(todaysDate.getFullYear(), 0, 1);

      const howManyDaysPassed = Math.ceil((todaysDate - date) / 8.64e7);

      const markerPosition = (howManyDaysPassed / 365) * 100;
      setTodaysPosition(markerPosition);
    } else if (
      globalYear === todaysDate.getFullYear() &&
      globalMonth !== null &&
      Number(globalMonth) === todaysDate.getMonth() + 1
    ) {
      const date = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 1);

      const howManyDaysPassed = Math.ceil((todaysDate - date) / 8.64e7);

      const currentMonthDayCount = months.find(
        (mnth) =>
          Number(mnth.numerical_expression) === todaysDate.getMonth() + 1
      ).days;

      const partOfTodayByHrs =
        todaysDate.getHours() >= 1 && todaysDate.getHours() < 8
          ? 3
          : todaysDate.getHours() >= 8 && todaysDate.getHours() < 16
          ? 2
          : 1;

      const markerPosition =
        (howManyDaysPassed / currentMonthDayCount) * 100 - partOfTodayByHrs;

      setTodaysPosition(markerPosition);
    } else {
      setTodaysPosition();
    }
  }, [todaysDate, globalMonth, globalYear]);

  return (
    <>
      {todaysPosition && (
        <div
          style={{ marginLeft: `${todaysPosition}%` }}
          className="h-full w-1 absolute top-0 bg-red-600 z-50 transition-all duration-500"
        ></div>
      )}
    </>
  );
};

export default TodaysMarker;
