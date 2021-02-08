import React from "react";

// title: group name
// data: group data to create time stamps
// splitInto: depends on date split selected in parent component = Q (4), D (~30), W (7)

const Line = ({ title, data, splitInto }) => {
  return (
    <div className="flex">
      <div>{title}</div>
      <div>
        <span className="sr-only">
          CIA REIKIA SPLITINT I COLUMNSUS PAGAL SPLIT INTO ir kiekviena cel reik
          splitint i rows pagal data.lenth tokiu budu nebus overlap
        </span>
      </div>
    </div>
  );
};

export default Line;
