import React, { useEffect, useState } from "react";
import Line from "./Line";

const Timeline = ({ data }) => {
  const [matrix, setMatrix] = useState([]);
  const [splitInto, setSplitInto] = useState(12);

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

  useEffect(() => {
    const global_group = create_global_group(data);
    setMatrix(global_group);
    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="w-full">
      <select
        onChange={(e) => {
          setSplitInto(Number(e.target.value));
        }}
      >
        <option value="12">12 Y</option>
        <option value="30">30 M</option>
        <option value="7">7 W</option>
      </select>
      <div className="flex justify-center p-2">Splitted into : {splitInto}</div>
      {matrix.map((item) => (
        <Line
          key={Math.random()}
          data={item}
          title={item[0].group}
          splitInto={splitInto}
        />
      ))}
    </div>
  );
};

export default Timeline;
