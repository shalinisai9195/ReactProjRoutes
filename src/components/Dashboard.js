import React from "react";
import BasicCard from "./CardComponents/BasicCard";
import ProgressCard from "./CardComponents/ProgressCard"

function Dashbord(props){
    //console.log(props)
    return <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
<div id="content">


    {/* <!-- Begin Page Content --> */}
    <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
        <BasicCard lable='Earnings (Monthly)' value={props.data.Earningmonthly} icon='fa-calendar' border='primary' />
        <BasicCard lable='Earnings (Annual)' value={props.data.EarningAnnual} icon='fa-dollar-sign' border='success' />
        <ProgressCard lable='Tasks' value={props.data.Tasks} icon='fa-clipboard-list' border='info'/>
        <BasicCard lable='Pending Requests' value={props.data.pendingreq} icon='fa-comments' border='warning' />
         </div>
     </div>
    </div>
  </div>
    
    
}
export default Dashbord;