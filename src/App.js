const { default: Timeline } = require("./Timeline");

const data = [
  {
    id: "1",
    start_date: "2020-01-27",
    end_date: "2020-11-27",
    title: "Task 1",
    group: 1,
  },
  {
    id: "2",
    start_date: "2020-08-27",
    end_date: "2020-10-03",
    title: "Task 2",
    group: 2,
  },
  {
    id: "3",
    start_date: "2020-06-05",
    end_date: "2020-06-25",
    title: "Task 3",
    group: 2,
  },
];

function App() {
  return (
    <div className="h-full flex justify-center items-center">
      <Timeline data={data} />
    </div>
  );
}

export default App;
