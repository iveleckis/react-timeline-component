import React from 'react';
import Group from './Group';

const Body = ({ all_groups, global_year, global_month }) => {
    console.log(all_groups);
    console.log(global_year);
    console.log(global_month);
    return (
        <div>
            {all_groups &&
                all_groups.map((group) => (
                    <Group key={group[0].group} list_of_group_items={group} />
                ))}
        </div>
    );
};

export default Body;
