import React, { useEffect, useState } from "react";
import TimelineRowLine from "./TimelineRowLine";

// title: group name
// data: group data to create time stamps
// splitInto: depends on date split selected in parent component = Q (4), D (~30), W (7)

const TimelineRow = ({ title, line_data }) => {
  const [lineRowData, setLineRowData] = useState(line_data);

  const add_values_to_line = (row_data) => {
    const row_line_with_indexes = [];
    for (let i in row_data) {
      const date_indexes = get_date_indexes(row_data[i]);
      if (date_indexes) {
        date_indexes.start = calculate_ratios(date_indexes.start, 365);
        date_indexes.end = calculate_ratios(date_indexes.end, 365);
        let item_with_date_indexes;
        if (date_indexes.start < 0 || date_indexes.end > 1) {
          const fixed_indexes = fix_indexes(date_indexes);
          console.log("fixed_indexes");
          console.log(date_indexes);
          console.log(fixed_indexes);
          item_with_date_indexes = { ...lineRowData[i], fixed_indexes };
        } else {
          item_with_date_indexes = { ...lineRowData[i], date_indexes };
        }
        row_line_with_indexes.push(item_with_date_indexes);
      }
    }
    setLineRowData(row_line_with_indexes);
  };

  const get_date_indexes = (item) => {
    const dt_start = new Date(item.start_date);
    const dt_end = new Date(item.end_date);

    const item_start_date = new Date(dt_start.getTime());
    const year_start_start = new Date(dt_start.getFullYear(), 0, 1);

    const item_end_date = new Date(dt_end.getTime());
    const year_start_end = new Date(dt_end.getFullYear(), 0, 1);

    if (dt_start.getFullYear() <= dt_end.getFullYear()) {
      const start_year = dt_start.getFullYear();
      const end_year = dt_end.getFullYear();
      const current_year = new Date().getFullYear();

      let indexes;

      if (start_year === end_year && current_year === start_year) {
        indexes = {
          start: (item_start_date - year_start_start + 1) / 86400000,
          end: Math.ceil((item_end_date - year_start_end + 1) / 86400000),
        };
      } else if (start_year === current_year && current_year < end_year) {
        indexes = {
          start: (item_start_date - year_start_start + 1) / 86400000,
          end: Math.ceil((item_end_date - year_start_end + 1) / 86400000) + 365,
        };
      } else if (end_year === current_year && current_year > start_year) {
        indexes = {
          start: (item_start_date - year_start_start + 1) / 86400000 - 365,
          end: Math.ceil((item_end_date - year_start_end + 1) / 86400000),
        };
      } else if (start_year < current_year && end_year > current_year) {
        indexes = {
          start: 1,
          end: 365,
        };
      }
      return indexes;
    }
  };

  const calculate_ratios = (index, realtive_value) => {
    return Number((index / realtive_value).toFixed(2));
  };

  const fix_indexes = (out_of_range_indexes) => {
    return {
      start: out_of_range_indexes.start < 0 ? 0 : out_of_range_indexes.start,
      end: out_of_range_indexes.end > 1 ? 1 : out_of_range_indexes.end,
    };
  };

  useEffect(() => {
    add_values_to_line(line_data);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex border border-gray-200 w-full">
      <div className="w-32 flex items-center justify-center bg-white shadow-r uppercase font-bold text-gray-600">
        {title}
      </div>
      <div className="w-full">
        {lineRowData.map((row) => (
          <div key={Math.random()} className="flex">
            <TimelineRowLine
              measurement_unit={12}
              fill_length={row.date_indexes}
              item_name={row.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineRow;
