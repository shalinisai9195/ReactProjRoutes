import React,{useState,useEffect} from "react";
import { Table,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";



function Alluser(){
  let [allusers,setAllUsers] = useState([])
  let navigate = useNavigate()

  let handleDelete = async(id)=>{
    try {
      let res = await axios.delete(`https://63947dba4df9248eada3b8c9.mockapi.io/users/${id}`);
      //console.log(res)
      if(res.status===200){
        getData();
      }
    } catch (error) {
      console.log(error)
    }
 }

  let getData= async()=>{
      // Using fetch get all data from mockapi
    // fetch('https://63947dba4df9248eada3b8c9.mockapi.io/users')
    // .then((res)=>res.json())
    // .then((response)=>setAllUsers(response))
    // .catch(err =>console.log(err))

     // Using axios get all data from mockapi
     try {
      let resp = await axios.get('https://63947dba4df9248eada3b8c9.mockapi.io/users')
        //console.log(resp.data)
      setAllUsers(resp.data)
     } catch (error) {
        console.log(error)
     }
   

  }
  useEffect(()=>{
    getData()
  },[])

    return<div className="container-fluid">
        <h1>Alluser</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        { 
      allusers.map((e)=>{

            return <tr key={e.id}> 
            
            <td>{e.id}</td> 
            <td>{e.FirstName}</td>
            <td>{e.LastName}</td>
            <td>{e.Email}</td>
            <td>{e.Mobile}</td>
            <td>{e.DOB}</td>
           <td>
            <Button variant="primary" onClick={()=>navigate(`/add-people/${e.id}`)}>
              <i className="fas fa-pen-to-square"></i>Edit </Button>
            &nbsp;
            &nbsp;
            <Button variant="danger" onClick={()=>{handleDelete(e.id)}}><i className="fas fa-trash">
              </i>Delete</Button>
            </td>

            </tr>
        })

        }

    
      </tbody>
    </Table>
    
    </div>
}
export default Alluser;