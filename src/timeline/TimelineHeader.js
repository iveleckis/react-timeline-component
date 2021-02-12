import React, { useEffect, useState } from 'react';
import { short_months } from './supplementary-data';

const current_date = new Date().getFullYear();

const TimelineHeader = ({ set_range, table_range }) => {
    const [splitInto, setSplitInto] = useState('short_months');
    const [splitIntoCels, setSplitIntoCels] = useState([]);

    // express as date 2021 = representing 2021 (2020 => 2020)
    // 2021.01 => january of 2021
    // 2021.01.05 => first week of 2021 january

    const setup_timeline_header = (header_cel_values) => {
        header_cel_values === 'short_months' && setSplitIntoCels(short_months);
    };

    const change_range_year = (current_range) => {
        if (typeof current_range === 'number') {
            current_range === current_date
                ? set_range(current_range + 1)
                : set_range(table_range - 1);
        } else {
            const extracted_year = current_range
                .split('')
                .splice(0, 4)
                .join('');
            Number(extracted_year) === current_date
                ? set_range(Number(extracted_year) + 1)
                : set_range(Number(extracted_year));
        }
    };

    const change_range_months = (current_range, month_to_set) => {
        if (typeof current_range === 'number') {
            set_range(`${current_range}.${month_to_set}`);
        } else {
            current_range = current_range.split('').splice(0, 4).join('');
            set_range(`${current_range}.${month_to_set}`);
        }
    };

    const set_active_month = (selected_month) => {
        if (typeof table_range === 'string') {
            if (
                table_range.split('').splice(5, 2).join('') ===
                selected_month.numerical_expression
            ) {
                return true;
            }
        }
    };

    useEffect(() => {
        setup_timeline_header(splitInto);
    }, [splitInto]);

    return (
        <div className='flex border-b border-gray-400 shadow'>
            <div
                className='w-32 flex items-center justify-center bg-white shadow-r uppercase font-bold text-gray-600 cursor-pointer'
                onClick={() => change_range_year(table_range)}
            >
                {table_range}
            </div>
            <div className='flex w-full'>
                {splitIntoCels.map((splitUnit, i) => (
                    <div
                        className={`w-full flex justify-center p-2 text-gray-600 cursor-pointer hover:bg-gray-50 ${
                            set_active_month(splitUnit) && 'bg-gray-200'
                        }`}
                        key={i}
                        onClick={() =>
                            change_range_months(
                                table_range,
                                splitUnit.numerical_expression
                            )
                        }
                    >
                        {splitUnit.short_name_letters}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelineHeader;
