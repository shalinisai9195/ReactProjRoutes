import React,{useContext} from "react";
import BasicCard from "./CardComponents/BasicCard";
import ProgressCard from "./CardComponents/ProgressCard"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import{UserUsingContext} from './ContextComponents/ContextUsingData'
import {DashboardDataUsing} from './ContextComponents/DashboardContext';


function Dashbord(){
  let contextusing = useContext(UserUsingContext);
  let dashboard = useContext(DashboardDataUsing);
  
    let navigate = useNavigate()
    let handleDelete =(i)=>{
     // console.log(props.users);
      let newArray=[...contextusing.users] //deep copy the main array
      newArray.splice(i,1);//delete the element in the new array
      contextusing.SetusersState(newArray)//update the new array in the state function 
    }
   
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
        <BasicCard lable='Earnings (Monthly)' value={dashboard.Earningmonthly} icon='fa-calendar' border='primary' />
        <BasicCard lable='Earnings (Annual)' value={dashboard.EarningAnnual} icon='fa-dollar-sign' border='success' />
        <ProgressCard lable='Tasks' value={dashboard.Tasks} style={{paddingLeft: "15"}} icon='fa-clipboard-list' border='info'/>
        <BasicCard lable='Pending Requests' value={dashboard.pendingreq} icon='fa-comments' border='warning' />
         </div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>email</th>
          <th>mobile</th>
          <th>timings</th>
          <th>Batch</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        { 
        contextusing.users.map((e,i)=>{

            return <tr key={i}> 
            
            <td>{i+1}</td> 
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.timings}</td>
            <td>{e.Batch}</td>
           <td>
            <Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}><i className="fas fa-pen-to-square"></i>Edit </Button>
            &nbsp;
            &nbsp;
            <Button variant="danger" onClick={()=>{handleDelete(i)}}><i className="fas fa-trash"></i>Delete</Button>
            </td>

            </tr>
        })

        }

    
      </tbody>
    </Table>

     </div>
    </div>
  </div>
    
    
}
export default Dashbord;