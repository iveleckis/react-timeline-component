import React from "react";
import { data_for_testing } from "./timeline/CONSTANTS";
import Timeline from "./timeline/Timeline";

function App() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-3/4">
        <Timeline timelineData={data_for_testing} />
      </div>
    </div>
  );
}

export default App;
