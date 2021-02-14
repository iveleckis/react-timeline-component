import React from 'react';

const BodySplitter = ({ parts_to_split_into }) => {
    const Dividers = () => {
        const dividers = [];
        for (let i = 0; i < parts_to_split_into; i++) {
            dividers.push(
                <div
                    key={i}
                    style={{ zIndex: '-10' }}
                    className='w-full h-full border-r border-l border-gray-200'
                />
            );
        }
        return dividers;
    };

    return (
        <div className='w-full h-full flex'>
            <Dividers />
        </div>
    );
};

export default BodySplitter;
