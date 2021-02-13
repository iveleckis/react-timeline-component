import React from 'react';
import Timeline from './timeline/Timeline';
import { data_for_testing } from './timeline/supplementary-data';
import TimelineN from './new-timeline/Timeline';

function App() {
    return (
        <div className='h-full flex justify-center items-center flex-col'>
            <div className='p-32 w-full'>
                <Timeline timeline_data={data_for_testing} />
            </div>
            <div className='p-32 w-full'>
                <TimelineN timeline_data={data_for_testing} />
            </div>
        </div>
    );
}

export default App;
