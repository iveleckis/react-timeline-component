import React, { useEffect, useState } from 'react';
import TimelineRow from './TimelineRow';

const TimelineBody = ({ data_matrix, table_range }) => {
    useEffect(() => {}, []);

    return (
        <div>
            {data_matrix &&
                data_matrix.map((item) => (
                    <TimelineRow
                        key={`${item[0].group}${item[0].name}`}
                        line_data={item}
                        title={item[0].group}
                    />
                ))}
        </div>
    );
};

export default TimelineBody;
