import React,{useReducer} from "react";
import {Button} from 'react-bootstrap'
let initialValue = {count:0,name:""}
function UsingReducer(state,action){
    switch(action.type){
        case "Increment": return {...state, count:state.count+1}
        case "decrement": return {...state, count:state.count-1}
        case "Reset": return {...state, count:0,name:""}
        case "Updatename": return {...state, name:action.value}
        default: return {...state, count:state.name}
    }
}

function UseReducer(){
    let [state,dispatch] = useReducer(UsingReducer,initialValue)
    return <div className="container-fluid"> 
     <h1 style={{"color":"ren"}}>
       This is a UseReducer Detailes
       <hr/>
    </h1>
    <div>
        <Button variant="danger" onClick={()=>dispatch({type:"decrement"})}>-</Button>
        &nbsp; &nbsp;
        {state.count}
        &nbsp; &nbsp;
        <Button variant="success" onClick={()=>dispatch({type:"Increment"})}>+</Button>
        <br></br>
        <br></br>
        <Button variant="warning" onClick={()=>dispatch({type:"Reset"})}>Reset</Button>
        <br></br>
        <br></br>
        <input type={"text"} value={state.name} onChange={(e)=>dispatch({type:"Updatename",value:e.target.value})} />

    </div>
    </div> 
}
export default UseReducer;