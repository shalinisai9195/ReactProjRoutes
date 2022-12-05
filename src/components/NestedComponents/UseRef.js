import React, { useState, useRef, useEffect } from "react";
import {Button} from 'react-bootstrap'

function UseRef(){
    let [name,setName] = useState("");
    let count = useRef(0); 
    let rollRef = useRef(null)
    useEffect(()=>{
        count.current = count.current+1;
    })
     return<div className="container-fluid"> 
        <h1>
       This is a UseRef Detailes </h1>
       <input type={'text'} value={name} onChange={e=>{setName(e.target.value)}} placeholder="name"/>
       <br></br>
       <br></br>
       <span>{count.current}</span>
       <br></br>
       <br></br>
       <input type={'text'} ref={rollRef} />
       <br></br>
       <br></br>
       <Button variant='primary' onClick={()=>rollRef.current.focus()}>Click   me </Button>
   
    </div>
    
}
export default UseRef;