import React, { useEffect, useState } from "react";

const Timeline = ({ data }) => {
  const [rows, setRows] = useState([]);
  const get_rows = () => {
    const rows_check = [];
    for (let i in data) {
      if (!rows_check.includes(data[i].group)) {
        rows_check.push(data[i].group);
      }
    }
    setRows(rows_check);
  };

  useEffect(() => {
    data && get_rows();
    // eslint-disable-next-line
  }, [data]);
  return (
    <div>
      <div>DATE TIMELINE</div>
      <div>
        {rows.map((row, i) => (
          <div key={Math.random() * i} className="flex">
            <div>{row}</div>
            <div>timeline</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
