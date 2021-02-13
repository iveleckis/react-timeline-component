import React from 'react';
import Track from './Track';

const Group = ({ list_of_group_items }) => {
    return (
        <div className='flex'>
            <div className='flex justify-center items-center w-32 border'>
                title
            </div>
            <div>
                {list_of_group_items &&
                    list_of_group_items.map((group_item, i) => (
                        <Track
                            key={`${group_item.title}${group_item.start_date}${i}`}
                            list_of_tracks={group_item}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Group;
