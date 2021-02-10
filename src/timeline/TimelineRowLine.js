import React, { useState } from "react";

const random_line_color_pool = [
  `bg-red-${Math.floor(Math.random() * 4 + 1) * 100} border-red-700`,
  `bg-blue-${Math.floor(Math.random() * 4 + 1) * 100} border-blue-700`,
  `bg-green-${Math.floor(Math.random() * 4 + 1) * 100} border-green-700`,
  `bg-yellow-${Math.floor(Math.random() * 4 + 1) * 100} border-yellow-700`,
  `bg-pink-${Math.floor(Math.random() * 4 + 1) * 100} border-pink-700`,
  `bg-gray-${Math.floor(Math.random() * 4 + 1) * 100} border-gray-700`,
  `bg-indigo-${Math.floor(Math.random() * 4 + 1) * 100} border-indigo-700`,
  `bg-purple-${Math.floor(Math.random() * 4 + 1) * 100} border-purple-700`,
];

const TimelineRowLine = ({ measurement_unit, fill_length, item_name }) => {
  const [splitByMeasurement, setSplitByMeasurement] = useState(
    new Array(measurement_unit).fill(0)
  );

  return (
    <div className="w-full">
      <div className="flex relative h-8 items-center">
        {splitByMeasurement.map((unit) => (
          <div key={Math.random()} className="w-full h-8 border-l"></div>
        ))}
        <div
          style={{
            width: `${
              fill_length && (fill_length.end - fill_length.start) * 100
            }%`,
            marginLeft: `${fill_length && fill_length.start * 100}%`,
          }}
          className={`absolute h-6 my-1 w-full border-2 rounded text-center overflow-hidden truncate text-sm px-2 font-bold ${
            random_line_color_pool[
              Math.floor(Math.random() * random_line_color_pool.length)
            ]
          }`}
        >
          {item_name}
        </div>
      </div>
    </div>
  );
};

export default TimelineRowLine;
