import React, { useEffect } from 'react';
import Row from './Row';

const TimelineBody = ({ data_matrix, table_range, track_splits_into }) => {
    useEffect(() => {}, []);

    return (
        <div>
            {data_matrix &&
                data_matrix.map((item) => (
                    <Row
                        key={`${item[0].group}${item[0].name}`}
                        line_data={item}
                        title={item[0].group}
                        track_splits_into={track_splits_into}
                    />
                ))}
        </div>
    );
};

export default TimelineBody;
