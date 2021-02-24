import React from "react";
import { data_for_testing } from "./timeline/CONSTANTS";
import Timeline from "./timeline/Timeline";

function App() {
  return (
    <div className="flex h-full w-full bg-black">
      <div className="flex w-64 bg-gray-600 flex-shrink-0">HUGE MENU</div>
      <Timeline timeline_data={data_for_testing} />
    </div>
  );
}

export default App;
