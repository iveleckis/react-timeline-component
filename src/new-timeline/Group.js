import React, { useEffect } from 'react';
import Track from './Track';

const Group = ({
    list_of_group_items,
    global_year,
    global_month,
    children,
}) => {
    const filter_and_setup_for_rendering = (all_data, year, month) => {
        const filtered_by_current_range = filter_out_items_by_date_range(
            list_of_group_items,
            global_year,
            global_month
        );
        console.log(filtered_by_current_range);
        for (let i in filtered_by_current_range) {
            set_item_ranges();
        }
    };

    const filter_out_items_by_date_range = (all_data, year, month) => {
        let start_to_end_includes_current;
        if (!month) {
            start_to_end_includes_current = all_data.filter((item) => {
                const start_year = Number(
                    item.start_date.split('').splice(0, 4).join('')
                );
                const end_year = Number(
                    item.end_date.split('').splice(0, 4).join('')
                );
                return (
                    end_year === year ||
                    start_year === year ||
                    (start_year < year && end_year > year)
                );
            });
        } else {
            start_to_end_includes_current = all_data.filter((item) => {
                const start_year_month = item.start_date
                    .split('')
                    .splice(0, 7)
                    .join('');
                const end_year_month = item.end_date
                    .split('')
                    .splice(0, 7)
                    .join('');
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

    const set_item_ranges = (item, set_by) => {};

    useEffect(() => {
        filter_and_setup_for_rendering(
            list_of_group_items,
            global_year,
            global_month
        );
        // eslint-disable-next-line
    }, [list_of_group_items, global_year, global_month]);

    return (
        <div className='flex w-full'>
            <div className='flex items-center justify-center w-32 bg-white shadow-r uppercase font-bold text-gray-600'>
                {list_of_group_items[0].group}
            </div>
            <div className='w-full relative'>
                {list_of_group_items &&
                    list_of_group_items.map((group_item, i) => (
                        <Track
                            key={`${group_item.title}${group_item.start_date}${i}`}
                            track_length_by_index={Math.floor(
                                Math.random() * 50
                            )}
                            track_start_by_index={Math.floor(
                                Math.random() * 50
                            )}
                            title={group_item.title}
                        />
                    ))}
                <div className='absolute top-0 left-0 w-full h-full'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Group;
