import {useParams} from 'react-router-dom';
import React,{useState,useEffect,useContext} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import{UserUsingContext} from '../ContextComponents/ContextUsingData';

function EditUser(){
  // passing data using user provider context
   let usingcontext = useContext(UserUsingContext)

   let {id} = useParams();
   // (or) let params = useParams();
  
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [mobile,setMobile] = useState("")
    let [Batch,setBatch] = useState("")
    let [timings,setTime] = useState("")


    let navigate = useNavigate();

    useEffect(()=>{
      if(id){
       // console.log(usingcontext.users[id].name)
          setName(usingcontext.users[id].name)
          setEmail(usingcontext.users[id].email)
          setMobile(usingcontext.users[id].mobile)
          setBatch(usingcontext.users[id].Batch)
          setTime(usingcontext.users[id].timings)
         }else
         { navigate('/dashboard')}
              
    },[])
    let handleSubmit=()=>{
        let newUserData = {name,email,mobile,Batch,timings} // object declar
        let newArry = [...usingcontext.users] //old datas
        console.log(newArry)
        newArry.splice(id,1,newUserData)// push new data into old/exit data
        
        usingcontext.SetusersState(newArry)// update into state include with old and new data
        navigate('/dashboard')// navigate to dashboard to display changes
      }
 
    return <>
    <div className="container-fluid">
     <Form>
    <Form.Group className="mb-3" >
     <Form.Label>Name</Form.Label>
      <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Mobile</Form.Label>
      <Form.Control type="text" value={mobile} placeholder="Enter Mobile" onChange={(e)=>{setMobile(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Batch</Form.Label>
      <Form.Control type="text" value={Batch} placeholder="Enter Batch" onChange={(e)=>{setBatch(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Session Timings</Form.Label>
     <Form.Select defaultValue={timings}  onChange={(e)=>{setTime(e.target.value)}}>
        <option value="0" disabled>session Timings</option>
        <option value="10am to 12pm" >10am to 12pm</option>
        <option value="12pm to 2pm" >12pm to 2pm</option>
        <option value="2pm to 4pm" >2pm to 4pm</option>
        <option value="2pm to 4pm" >4pm to 6pm</option>
     </Form.Select>
    </Form.Group>
    <Button variant="primary" onClick={()=>handleSubmit()}>
      Submit
    </Button>
  </Form>
  </div>  
       {/* <h1 style={{fontWeight:"bold", fontSize:"20px"}}>Edituser {id}</h1> */}

       </>
}
export default EditUser;