import React from 'react';
import { months } from './CONSTANTS';

const Header = ({
    global_year,
    new_global_year,
    global_month,
    new_global_month,
}) => {
    const MonthDays = () => {
        if (global_month) {
            const days = [];
            const current_month_details = months.find(
                (month) => month.numerical_expression === global_month
            );
            for (let i = 1; i <= current_month_details.days; i++) {
                days.push(
                    <div
                        className='w-full text-xs p-1 flex justify-center items-center'
                        key={i}
                    >
                        {i}
                    </div>
                );
            }
            return days;
        }
    };

    return (
        <div className='flex select-none w-full shadow-md z-50'>
            <div className='flex w-full border-b border-gray-400'>
                <div
                    className='transition duration-100 border-gray-200 flex justify-center items-center font-bold cursor-pointer select-none w-32 hover:bg-gray-100'
                    onClick={() =>
                        global_year === 2020
                            ? new_global_year(2021)
                            : global_year === 2022
                            ? new_global_year(2020)
                            : new_global_year(2022)
                    }
                >
                    {global_year}
                </div>
                <div className='w-full'>
                    <div className='flex border-r w-full'>
                        {months.map((month) => (
                            <div
                                key={month.numerical_expression}
                                className={`w-full transition duration-100 flex justify-center items-center cursor-pointer p-2 border-gray-400 hover:bg-gray-100 ${
                                    global_month ===
                                        month.numerical_expression &&
                                    'hover:bg-none border-l font-bold'
                                } ${
                                    month.numerical_expression !== '12' &&
                                    global_month ===
                                        month.numerical_expression &&
                                    'border-r'
                                } ${
                                    global_month &&
                                    global_month !==
                                        month.numerical_expression &&
                                    'border-b'
                                }`}
                                onClick={() => {
                                    if (
                                        global_month ===
                                        month.numerical_expression
                                    ) {
                                        new_global_month(null);
                                    } else {
                                        new_global_month(
                                            month.numerical_expression
                                        );
                                    }
                                }}
                            >
                                {month.short_name_letters}
                            </div>
                        ))}
                    </div>
                    <div className='flex border-l border-gray-400'>
                        {global_month && <MonthDays />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
