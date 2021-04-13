import React, { useEffect, useState } from "react";
import { months } from "./CONSTANTS";
import TodaysMarker from "./TodaysMarker";
import Track from "./Track";

const Group = ({ listOfGroupItems, globalYear, globalMonth, children }) => {
  const [
    listOfGroupItemsWithIndexes,
    setListOfGroupItemsWithIndexes,
  ] = useState();

  const filterAndSetupForRendering = (allData, year, month) => {
    const allDataWithIndexes = [];
    for (let i in allData) {
      const itemRangeIndexes = determineItemRangeByGlobalDate(
        allData[i],
        year,
        month
      );
      const itemWithIndexes = {
        ...allData[i],
        start_index: itemRangeIndexes.start,
        end_index: itemRangeIndexes.end,
      };
      allDataWithIndexes.push(itemWithIndexes);
    }
    setListOfGroupItemsWithIndexes(allDataWithIndexes);
  };

  const determineItemRangeByGlobalDate = (item, year, month) => {
    const itemRangeIndexes = { start: "not_set", end: "not_set" };
    const itemStartDate = item.start_date;
    const itemEndDate = item.end_date;

    if (!month) {
      const currentYear = String(year);

      const itemStartYear = item.start_date.split("").splice(0, 4).join("");
      const itemEndYear = item.end_date.split("").splice(0, 4).join("");

      if (itemStartYear < currentYear) {
        itemRangeIndexes.start = 0;
      }
      if (itemEndYear > currentYear) {
        itemRangeIndexes.end = 1;
      }
      if (itemEndYear === currentYear) {
        const endIndex = dateIndexInCurrentYear(currentYear, itemEndDate);
        itemRangeIndexes.end = endIndex;
      }
      if (itemStartYear === currentYear) {
        const startIndex = dateIndexInCurrentYear(currentYear, itemStartDate);
        itemRangeIndexes.start = startIndex;
      }
    } else {
      const currentYearMonth = `${year}.${month}`;

      const itemStartYearMonth = item.start_date
        .split("")
        .splice(0, 7)
        .join("");

      const itemEndYearMonth = item.end_date.split("").splice(0, 7).join("");

      if (itemStartYearMonth < currentYearMonth) {
        itemRangeIndexes.start = 0;
      }
      if (itemEndYearMonth > currentYearMonth) {
        itemRangeIndexes.end = 1;
      }
      if (itemEndYearMonth === currentYearMonth) {
        const endIndex = Number(
          dateIndexInCurrentYearMonth(currentYearMonth, itemEndDate)
        );

        if (globalMonth) {
          const correction = Number(
            (
              1 /
              months.find((mth) => mth.numerical_expression === globalMonth)
                .days
            ).toFixed(2)
          );
          itemRangeIndexes.end = (endIndex + correction).toFixed(2);
        } else {
          itemRangeIndexes.end = endIndex;
        }
      }
      if (itemStartYearMonth === currentYearMonth) {
        const startIndex = dateIndexInCurrentYearMonth(
          currentYearMonth,
          itemStartDate
        );
        itemRangeIndexes.start = startIndex;
      }
    }
    return itemRangeIndexes;
  };

  const dateIndexInCurrentYear = (currentDateRange, dateToBeIndexed) => {
    const currentYearDate = new Date(currentDateRange);
    const dateToBeIndexedDate = new Date(dateToBeIndexed);
    const howManyDaysPassed = Math.ceil(
      (dateToBeIndexedDate - currentYearDate) / 86400000
    );
    return Number((howManyDaysPassed / 365).toFixed(2));
  };

  const dateIndexInCurrentYearMonth = (currentDateRange, dateToBeIndexed) => {
    const currentYearDate = new Date(currentDateRange);
    const dateToBeIndexedDate = new Date(dateToBeIndexed);

    const howManyDaysPassed =
      (dateToBeIndexedDate - currentYearDate) / 86400000;

    const currentRangeMonth = currentDateRange.split("").splice(5, 2).join("");

    const currentMonthDays = months.find(
      (month) => month.numerical_expression === currentRangeMonth
    ).days;

    return Number(howManyDaysPassed / currentMonthDays).toFixed(2);
  };

  useEffect(() => {
    filterAndSetupForRendering(listOfGroupItems, globalYear, globalMonth);
    // eslint-disable-next-line
  }, [listOfGroupItems, globalYear, globalMonth]);

  return (
    <>
      {listOfGroupItemsWithIndexes && (
        <div className="flex w-full">
          <div className="flex items-center justify-center text-center w-40 p-2 text-sm border-r border-gray-300 flex-shrink-0 bg-white shadow-r uppercase font-bold text-gray-600">
            {listOfGroupItemsWithIndexes[0] &&
              listOfGroupItemsWithIndexes[0].group}
          </div>
          <div className="w-full relative">
            <TodaysMarker globalMonth={globalMonth} globalYear={globalYear} />

            {listOfGroupItemsWithIndexes.map((groupItem, i) => {
              const itemStart = (groupItem.start_index * 100).toFixed(0);
              const itemLength = (
                (groupItem.end_index - groupItem.start_index) *
                100
              ).toFixed(0);

              return (
                <Track
                  key={i}
                  trackLengthByIndex={itemLength}
                  trackStartByIndex={itemStart}
                  title={groupItem.title}
                  trackStyling={groupItem.styling ? groupItem.styling : ""}
                  details={groupItem.details}
                  date={`${groupItem.start_date} - ${groupItem.end_date}`}
                />
              );
            })}
            <div className="absolute z-30 top-0 left-0 w-full h-full">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Group;
