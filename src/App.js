import React from "react";
import Timeline from "./timeline/Timeline";

const data = [
  {
    id: "99",
    start_date: "2020.08.10",
    end_date: "2022.01.27",
    title: "2020 - 2022",
    group: "Tests",
  },
  {
    id: "929",
    start_date: "2020.08.10",
    end_date: "2021.01.27",
    title: "2020 - 2021",
    group: "Tests",
  },
  {
    id: "0",
    start_date: "2021.12.10",
    end_date: "2022.01.27",
    title: "2021 - 2022",
    group: "Tests",
  },
  {
    id: "1",
    start_date: "2021.01.27",
    end_date: "2021.11.27",
    title: "all_all_pricing_all_all_pt-br_all_#1665",
    group: "Tests",
  },
  {
    id: "2",
    start_date: "2021.6.27",
    end_date: "2021.10.03",
    title: "VPN Support/Money-back section",
    group: "Ideas",
  },
  {
    id: "3",
    start_date: "2021.06.05",
    end_date: "2021.07.25",
    title: "VPN Network section",
    group: "Ideas",
  },
  {
    id: "4",
    start_date: "2021.01.05",
    end_date: "2021.06.25",
    title: "Prevent exits from landing page at the top of the page",
    group: "Ideas",
  },
  {
    id: "5",
    start_date: "2021.03.05",
    end_date: "2021.06.25",
    title: "home-page_flow_pricing_affiliate-ID2495_all_all_all_#1686",
    group: "Tests",
  },
  {
    id: "6",
    start_date: "2021.02.05",
    end_date: "2021.012.25",
    title: "Orange",
    group: "Random",
  },
  {
    id: "7",
    start_date: "2021.06.05",
    end_date: "2021.08.25",
    title: "/checkout/payment. Last steps barriers",
    group: "Ideas",
  },
];

function App() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="p-32 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default App;
