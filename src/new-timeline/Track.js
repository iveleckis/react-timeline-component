import React from 'react';
import { track_color_pool } from './CONSTANTS';

const Track = ({ track_length_by_index, track_start_by_index, title }) => {
    const random_track_styling =
        track_color_pool[Math.floor(Math.random() * track_color_pool.length)];
    return (
        <div
            className={`font-bold text-gray-800 text-center overflow-hidden truncate my-1 rounded border-2 ${random_track_styling}`}
            style={{
                width: `${track_length_by_index}%`,
                marginLeft: `${track_start_by_index}%`,
            }}
        >
            {title}
        </div>
    );
};

export default Track;
