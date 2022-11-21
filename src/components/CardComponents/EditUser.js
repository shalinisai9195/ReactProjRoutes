import React from "react";
import {useParams} from 'react-router-dom';


function EditUser(){
    let param = useParams();
    return <>
       <h1 style={{fontWeight:"bold", fontSize:"20px"}}>Edituser {param.id}</h1>
    </>
}
export default EditUser;