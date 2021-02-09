import React, { useEffect, useState } from 'react';

// title: group name
// data: group data to create time stamps
// splitInto: depends on date split selected in parent component = Q (4), D (~30), W (7)

const Line = ({ title, data, splitInto }) => {
    const [columns, setColumns] = useState(new Array(splitInto).fill(0));

    const add_values_to_line = (row_data) => {
        for (let i in row_data) {
            const date_indexes = get_data_indexes(row_data[i]);
            date_indexes.start = calculate_ratios(date_indexes.start, 365);
            date_indexes.end = calculate_ratios(date_indexes.end, 365);
        }
    };

    const get_data_indexes = (item) => {
        const dt_start = new Date(item.start_date);

        const item_start_date = new Date(dt_start.getTime());
        const year_start_start = new Date(dt_start.getFullYear(), 0, 1);

        const dt_end = new Date(item.end_date);

        const item_end_date = new Date(dt_end.getTime());
        const year_start_end = new Date(dt_end.getFullYear(), 0, 1);

        const indexes = {
            start: Math.ceil(
                (item_start_date - year_start_start + 1) / 86400000
            ),
            end: Math.ceil((item_end_date - year_start_end + 1) / 86400000),
        };

        return indexes;
    };

    const calculate_ratios = (index, realtive_value) => {
        return Number((index / realtive_value).toFixed(3));
    };

    useEffect(() => {
        add_values_to_line(data);
        // eslint-disable-next-line
    }, []);

    return (
        <div className='flex border border-gray-800 w-full'>
            <div className='w-32 flex items-center justify-center bg-red-300'>
                {title}
            </div>
            <div className='w-full'>
                {data.map((row) => (
                    <div
                        key={Math.random()}
                        className='flex w-full justify-center items-center'
                    >
                        {columns.map((item) => (
                            <div
                                className='w-full border-b p-1'
                                key={Math.random()}
                            >
                                x
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Line;
