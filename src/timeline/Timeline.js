import React, { useEffect, useState } from "react";
import TimelineRow from "./TimelineRow";
import { short_months } from "./supplementary-data";

const Timeline = ({ data }) => {
  const [matrix, setMatrix] = useState([]);
  const [splitIntoCels, setSplitIntoCels] = useState([]);
  const [splitInto, setSplitInto] = useState("short_months");

  const create_global_group = (raw_data) => {
    const all_groups = find_different_groups(raw_data);
    const global_group = [];
    for (let i in all_groups) {
      const new_group = create_new_group(all_groups[i], raw_data);
      global_group.push(new_group);
    }
    return global_group;
  };

  const find_different_groups = (array) => {
    const different_group_count = [];
    for (let i in array) {
      if (!different_group_count.includes(array[i].group)) {
        different_group_count.push(array[i].group);
      }
    }
    return different_group_count;
  };

  const create_new_group = (group_name, data_for_extraction) => {
    const new_group = [];
    for (let j in data_for_extraction) {
      if (group_name === data_for_extraction[j].group) {
        new_group.push(data_for_extraction[j]);
      }
    }
    return new_group;
  };

  const setup_timeline_header = (header_cel_values) => {
    header_cel_values === "short_months" && setSplitIntoCels(short_months);
  };

  useEffect(() => {
    const global_group = create_global_group(data);
    setMatrix(global_group);
    setup_timeline_header(splitInto);
    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="border border-gray-400 shadow-md">
      <div className="flex border-b border-gray-400 shadow-m">
        <div className="w-32 flex items-center justify-center bg-white shadow-r uppercase font-bold text-gray-600">
          2021
        </div>
        <div className="flex w-full">
          {splitIntoCels.map((splitUnit) => (
            <div
              className="w-full flex justify-center p-2 text-gray-600"
              key={Math.random()}
            >
              {splitUnit}
            </div>
          ))}
        </div>
      </div>
      {matrix.map((item) => (
        <TimelineRow
          key={Math.random()}
          line_data={item}
          title={item[0].group}
        />
      ))}
    </div>
  );
};

export default Timeline;
