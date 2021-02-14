import React from 'react';
import { data_for_testing } from './new-timeline/CONSTANTS';
import TimelineN from './new-timeline/Timeline';

function App() {
    return (
        <div className='h-full flex justify-center items-center flex-col'>
            <div className='p-2 w-full'>
                <TimelineN timeline_data={data_for_testing} />
            </div>
        </div>
    );
}

export default App;
