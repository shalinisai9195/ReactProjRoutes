import React from "react";
import {Link} from 'react-router-dom';

function Sidebar(){
    return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link to='/dashboard'>
                    <div className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </div>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
           <div className="sidebar-heading">
        InterFace
           </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <Link to='/edit-user'>
                    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>EditUser</span>
                    </div>
                </Link>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <Link to='/add-users'>
                    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>AddUser</span>
                    </div>
                </Link>
            </li>
            <li className="nav-item">
            <Link to='/alluser'>
                    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Nestersample</span>
                    </div>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>
            {/* Heading  */}
            <div className="sidebar-heading">
            Axios CRUD
           </div>

            <li className="nav-item">
            <Link to='/alluser'>
                    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Alluser</span>
                    </div>
                </Link>
            </li>
            <li className="nav-item">
            <Link to='/add-people'>
                    <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Addusers</span>
                    </div>
                </Link>
            </li>

            

        </ul>
        </>
}
export default Sidebar;