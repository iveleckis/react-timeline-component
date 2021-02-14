import React from 'react';
import BodySplitter from './BodySplitter';
import Group from './Group';
import { months } from './CONSTANTS';

const Body = ({ all_groups, global_year, global_month }) => {
    const set_splitter_by_global_date = (year, month) => {
        if (!month) {
            return 12;
        } else {
            const current_month_properties = months.find(
                (month_with_props) =>
                    month_with_props.numerical_expression === month
            );
            return current_month_properties.days;
        }
    };

    return (
        <div className='relative divide-y-2 divide-gray-300'>
            {all_groups &&
                all_groups.map((group) => (
                    <Group
                        key={group[0].group}
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
                ))}
        </div>
    );
};

export default Body;
