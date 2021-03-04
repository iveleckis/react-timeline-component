import React from "react";
import { data_for_testing } from "./timeline/CONSTANTS";
import Timeline from "./timeline/Timeline";

function App() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Timeline timeline_data={data_for_testing} />
    </div>
  );
}

export default App;
