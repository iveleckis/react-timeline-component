import React, { useState } from "react";
// import { track_color_pool } from "./CONSTANTS";

/* const random_track_styling =
  track_color_pool[Math.floor(Math.random() * track_color_pool.length)]; */

const Track = ({
  track_length_by_index,
  track_start_by_index,
  title,
  track_styling,
  details,
  date,
}) => {
  const [expandTrackInfo, setExpandTrackInfo] = useState(false);

  return (
    <div className="relative z-50 select-none">
      <div
        style={{
          width: `${expandTrackInfo ? 100 : track_length_by_index}%`,
          marginLeft: `${expandTrackInfo ? 0 : track_start_by_index}%`,
          height: "auto",
        }}
        onClick={() => setExpandTrackInfo(!expandTrackInfo)}
        className={`flex justify-center transition-all duration-500 items-center font-bold text-gray-800 my-2 rounded border-2 ${track_styling}`}
      >
        {expandTrackInfo ? (
          <div className="flex-col text-sm text-center">
            <div className="whitespace-nowrap">{title}</div>
            <div className="whitespace-nowrap">{date}</div>
            <div className="whitespace-nowrap">{details}</div>
          </div>
        ) : (
          <div className="overflow-hidden truncate">{title}</div>
        )}
      </div>
      {/* <div
        style={{
          width: `${track_length_by_index}%`,
          marginLeft: `${track_start_by_index}%`,
          bottom: "120%",
        }}
        className="absolute flex justify-center"
      >
        {hoverInfo && (
          <div className="bg-gray-500 z-50 text-white border border-gray-400 rounded-sm p-2 px-8 shadow">
            <div className="flex-col">
              <div className="whitespace-nowrap">{title}</div>
              <div className="whitespace-nowrap">{date}</div>
              <div className="whitespace-nowrap">{details}</div>
            </div>
            <div
              className="absolute"
              style={{
                width: 0,
                height: 0,
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderTop: "20px solid rgb(107, 114, 128)",
                left: "50%",
                marginLeft: "-20px",
              }}
            ></div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Track;
