import React from "react";
export const DashboardDataUsing = React.createContext();

function DashboardContext({children}){

        let data={
          Earningmonthly:"40,000",
          EarningAnnual:"215,000",
          Tasks:"60",
          pendingreq:20
        }
    return <DashboardDataUsing.Provider value={data}>
      {children}
    </DashboardDataUsing.Provider>
}
export default DashboardContext;