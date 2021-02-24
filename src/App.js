import React from "react";
import { data_for_testing } from "./timeline/CONSTANTS";
import Timeline from "./timeline/Timeline";

function App() {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold pb-8 text-gray-700">Timeline Demo</h1>
      <div className="p-2 w-full max-w-4xl">
        <Timeline timeline_data={data_for_testing} />
      </div>
    </div>
  );
}

export default App;
