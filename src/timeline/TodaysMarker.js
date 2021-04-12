import React, { useEffect, useState } from "react";

const TodaysMarker = ({ todaysDate = new Date(), zoomedToMonth }) => {
  const [todaysPosition, setTodaysPosition] = useState();

  useEffect(() => {
    const date = new Date(todaysDate.getFullYear(), 0, 1);

    const howManyDaysPassed = Math.ceil((todaysDate - date) / 8.64e7);

    const markerPosition =
      zoomedToMonth === null ? (howManyDaysPassed / 365) * 100 : "";
    setTodaysPosition(markerPosition);
  }, [todaysDate, zoomedToMonth]);

  return (
    <>
      {todaysPosition && (
        <div
          style={{ marginLeft: `${todaysPosition}%` }}
          className="h-full w-1 absolute top-0 bg-red-600 z-50"
        ></div>
      )}
    </>
  );
};

export default TodaysMarker;
