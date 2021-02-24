import React, { useEffect, useState } from "react";
import BodySplitter from "./BodySplitter";
import Group from "./Group";
import { months } from "./CONSTANTS";

const get_window_width = () => {
  const { innerWidth: width } = window;
  return width;
};

const Body = ({ all_groups, global_year, global_month }) => {
  const [filteredGroups, setFilteredGroups] = useState([]);

  const [windowWidth, setWindowWidth] = useState(get_window_width());

  const [groupWidth, setGroupWidth] = useState();

  const set_splitter_by_global_date = (year, month) => {
    if (!month) {
      return 12;
    } else {
      const current_month_properties = months.find(
        (month_with_props) => month_with_props.numerical_expression === month
      );
      return current_month_properties.days;
    }
  };

  const prepare_group_data = (groups, year, month) => {
    const filtered_groups_group = [];
    for (let i in groups) {
      const group_filtered_by_range = filter_out_items_by_date_range(
        groups[i],
        year,
        month
      );
      filtered_groups_group.push(group_filtered_by_range);
    }
    setFilteredGroups(filtered_groups_group);
  };

  const filter_out_items_by_date_range = (all_data, year, month) => {
    let start_to_end_includes_current;
    if (!month) {
      start_to_end_includes_current = all_data.filter((item) => {
        const start_year = Number(
          item.start_date.split("").splice(0, 4).join("")
        );
        const end_year = Number(item.end_date.split("").splice(0, 4).join(""));
        return (
          end_year === year ||
          start_year === year ||
          (start_year < year && end_year > year)
        );
      });
    } else {
      start_to_end_includes_current = all_data.filter((item) => {
        const start_year_month = item.start_date
          .split("")
          .splice(0, 7)
          .join("");
        const end_year_month = item.end_date.split("").splice(0, 7).join("");
        const global_year_month = `${year}.${month}`;
        return (
          end_year_month === global_year_month ||
          start_year_month === global_year_month ||
          (start_year_month < global_year_month &&
            end_year_month > global_year_month)
        );
      });
    }
    return start_to_end_includes_current;
  };

  const calculate_width = (days_to_count_from) => {
    const full_width =
      days_to_count_from === 31 ? 769 : days_to_count_from === 30 ? 748 : 723;
    return `calc(100% + ${full_width - windowWidth}px)`;
  };

  useEffect(() => {
    prepare_group_data(all_groups, global_year, global_month);
    // eslint-disable-next-line
  }, [all_groups, global_month, global_year]);

  useEffect(() => {
    if (!global_month) {
      setGroupWidth(windowWidth > 719 ? "100%" : "702px");
    } else {
      const calculated_width = calculate_width(
        months.find((month) => month.numerical_expression === global_month).days
      );
      setGroupWidth(windowWidth > 719 ? "100%" : calculated_width);
    }
    // eslint-disable-next-line
  }, [global_month, windowWidth]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(get_window_width());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative"
      style={{
        width: `${groupWidth}`,
      }}
    >
      {filteredGroups &&
        filteredGroups.map((group, i) => {
          return (
            <div className={`${i !== 0 && "border-t border-gray-400"}`} key={i}>
              <Group
                list_of_group_items={group}
                global_year={global_year}
                global_month={global_month}
              >
                <BodySplitter
                  parts_to_split_into={set_splitter_by_global_date(
                    global_year,
                    global_month
                  )}
                />
              </Group>
            </div>
          );
        })}
    </div>
  );
};

export default Body;
