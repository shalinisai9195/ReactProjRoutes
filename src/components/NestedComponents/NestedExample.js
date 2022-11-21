import React from "react";
import { Link, Outlet } from "react-router-dom";

function NeatedExample(){
    return <div style={{"display":"flex", "flexDirection":"column", color:'black' }}>
       <h3>This ia an example for Nested Routing</h3>
       <ul>
        <Link to={'profile'}>
        <li>
            <p>Profile</p>
        </li>
        </Link>
        <Link to={'account'}>
        <li>
            <p>Account</p>
        </li>
        </Link>
        <Link to={'home'}>
        <li>
            <p>Home</p>
        </li>
        </Link>
       </ul>
       <Outlet/>
    </div>
}
export default NeatedExample;