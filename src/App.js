import React from 'react';
import Timeline from './timeline/Timeline';

const data = [
    {
        id: '1',
        start_date: '2021.01.27',
        end_date: '2021.11.27',
        title: 'Task 1',
        group: 1,
    },
    {
        id: '2',
        start_date: '2021.08.27',
        end_date: '2021.10.03',
        title: 'Task 2',
        group: 2,
    },
    {
        id: '3',
        start_date: '2021.06.05',
        end_date: '2021.06.25',
        title: 'Task 3',
        group: 2,
    },
    {
        id: '4',
        start_date: '2021.06.05',
        end_date: '2021.06.25',
        title: 'Task 4',
        group: 2,
    },
    {
        id: '5',
        start_date: '2021.06.05',
        end_date: '2021.06.25',
        title: 'Task 5',
        group: 1,
    },
    {
        id: '6',
        start_date: '2021.06.05',
        end_date: '2021.06.25',
        title: 'Orange',
        group: 'fruits',
    },
    {
        id: '7',
        start_date: '2021.06.05',
        end_date: '2021.06.25',
        title: 'task 99',
        group: 2,
    },
];

function App() {
    return (
        <div className='h-full flex justify-center items-center'>
            <div className='p-32 w-full'>
                <Timeline data={data} />
            </div>
        </div>
    );
}

export default App;
