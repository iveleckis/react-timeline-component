import React, { useState } from "react";

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
        className={`flex justify-center cursor-pointer overflow-x-hidden transition-all duration-500 items-center font-bold text-gray-800 my-2 rounded border-2 ${track_styling}`}
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
    </div>
  );
};

export default Track;
