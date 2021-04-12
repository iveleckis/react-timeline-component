import React, { useEffect, useState } from "react";
import BodySplitter from "./BodySplitter";
import Group from "./Group";
import { months } from "./CONSTANTS";

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

const Body = ({ allGroups, globalYear, globalMonth }) => {
  const [filteredGroups, setFilteredGroups] = useState([]);

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const [groupWidth, setGroupWidth] = useState();

  const setSplitterByGlobalDate = (year, month) => {
    if (!month) {
      return 12;
    } else {
      const currentMonthProperties = months.find(
        (mnth) => mnth.numerical_expression === month
      );
      return currentMonthProperties.days;
    }
  };

  const prepareGroupData = (groups, year, month) => {
    const filteredGroupsGroup = [];
    for (let i in groups) {
      const groupFilteredByRange = filterOutItemsByDateRange(
        groups[i],
        year,
        month
      );
      filteredGroupsGroup.push(groupFilteredByRange);
    }
    setFilteredGroups(filteredGroupsGroup);
  };

  const filterOutItemsByDateRange = (allData, year, month) => {
    let startToEndIncludesCurrent;
    if (!month) {
      startToEndIncludesCurrent = allData.filter((item) => {
        const startYear = Number(
          item.start_date.split("").splice(0, 4).join("")
        );
        const endYear = Number(item.end_date.split("").splice(0, 4).join(""));
        return (
          endYear === year ||
          startYear === year ||
          (startYear < year && endYear > year)
        );
      });
    } else {
      startToEndIncludesCurrent = allData.filter((item) => {
        const startYearMonth = item.start_date.split("").splice(0, 7).join("");
        const endYearMonth = item.end_date.split("").splice(0, 7).join("");
        const globalYearMonth = `${year}.${month}`;
        return (
          endYearMonth === globalYearMonth ||
          startYearMonth === globalYearMonth ||
          (startYearMonth < globalYearMonth && endYearMonth > globalYearMonth)
        );
      });
    }
    return startToEndIncludesCurrent;
  };

  const calculateWidth = (daysToCountFrom) => {
    const fullWidth =
      daysToCountFrom === 31 ? 769 : daysToCountFrom === 30 ? 748 : 723;
    return `calc(100% + ${fullWidth - windowWidth}px)`;
  };

  useEffect(() => {
    prepareGroupData(allGroups, globalYear, globalMonth);
    // eslint-disable-next-line
  }, [allGroups, globalMonth, globalYear]);

  useEffect(() => {
    if (!globalMonth) {
      setGroupWidth(windowWidth > 719 ? "100%" : "702px");
    } else {
      const calculatedWidth = calculateWidth(
        months.find((month) => month.numerical_expression === globalMonth).days
      );
      setGroupWidth(windowWidth > 719 ? "100%" : calculatedWidth);
    }
    // eslint-disable-next-line
  }, [globalMonth, windowWidth]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <div
        className="relative divide-y divide-gray-400"
        style={{
          width: `${groupWidth}`,
        }}
      >
        {filteredGroups &&
          filteredGroups.map(
            (group, i) =>
              group.length !== 0 && (
                <div key={i}>
                  <Group
                    listOfGroupItems={group}
                    globalYear={globalYear}
                    globalMonth={globalMonth}
                  >
                    <BodySplitter
                      partsToSplitInto={setSplitterByGlobalDate(
                        globalYear,
                        globalMonth
                      )}
                      globalMonth={globalMonth}
                    />
                  </Group>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Body;
