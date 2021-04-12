import React, { useEffect, useState } from "react";
import Body from "./Body";
import Header from "./Header";

const Timeline = ({ timelineData }) => {
  const [globalYear, setGlobalYear] = useState(new Date().getFullYear());
  const [globalMonth, setGlobalMonth] = useState(null);

  const [possibleYears, setPossibleYears] = useState([]);

  const [groupOfGroups, setGroupOfGroups] = useState([]);

  const createGroupOfGroups = (rawData) => {
    const allGroups = findDifferentGroups(rawData);
    const groupOfAllGroups = [];
    for (let i in allGroups) {
      const newGroup = createNewGroup(allGroups[i], rawData);
      groupOfAllGroups.push(newGroup);
    }
    return groupOfAllGroups;
  };

  const findDifferentGroups = (array) => {
    const differentGroupCount = [];
    for (let i in array) {
      if (!differentGroupCount.includes(array[i].group)) {
        differentGroupCount.push(array[i].group);
      }
    }
    return differentGroupCount;
  };

  const createNewGroup = (groupName, dataForExtraction) => {
    const newGroup = [];
    for (let j in dataForExtraction) {
      if (groupName === dataForExtraction[j].group) {
        newGroup.push(dataForExtraction[j]);
      }
    }
    return newGroup;
  };

  const setupPossibleYears = (dataToPickFrom) => {
    const years = [];
    for (let i in dataToPickFrom) {
      const start = Number(
        dataToPickFrom[i].start_date.split("").splice(0, 4).join("")
      );
      const end = Number(
        dataToPickFrom[i].end_date.split("").splice(0, 4).join("")
      );
      if (!years.includes(start)) {
        years.push(start);
      }
      if (!years.includes(end)) {
        years.push(end);
      }
    }
    years.sort((a, b) => (a < b ? 1 : -1));
    return years;
  };

  useEffect(() => {
    const years = setupPossibleYears(timelineData);
    setPossibleYears(years);
    const group_of_groups = createGroupOfGroups(timelineData);
    setGroupOfGroups(group_of_groups);
    // eslint-disable-next-line
  }, [timelineData]);

  return (
    <div
      style={{ height: "fit-content" }}
      className="text-gray-700 border-gray-400 border overflow-x-auto overflow-y-visible bg-white"
    >
      <Header
        globalYear={globalYear}
        globalMonth={globalMonth}
        newGlobalYear={(newGlobalYear) => setGlobalYear(newGlobalYear)}
        newGlobalMonth={(newGlobalMonth) => setGlobalMonth(newGlobalMonth)}
        possibleYears={possibleYears}
      />
      <Body
        allGroups={groupOfGroups}
        globalYear={globalYear}
        globalMonth={globalMonth}
      />
    </div>
  );
};

export default Timeline;
