import './App.css';
import Sidebar from './components/Sidebar'
import Dashbord from './components/Dashboard'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AddUser from './components/CardComponents/AddUser';
import EditUser from './components/CardComponents/EditUser';
import NeatedExample from './components/NestedComponents/NestedExample';
import Profile from './components/NestedComponents/Profile';
import Account from './components/NestedComponents/Account';
import Home from './components/NestedComponents/Home';
// import UseRef from './components/NestedComponents/UseRef';
// import UseReducer from './components/NestedComponents/UseReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextUsingData from './components/ContextComponents/ContextUsingData';
import DashboardContext from './components/ContextComponents/DashboardContext'
//import React,{useState} from 'react';

//export const againCheckContext = React.createContext(); // common storage has been created
function App(){
  
return <div id="wrapper">
  <ContextUsingData>
  <BrowserRouter>
    <Sidebar/>
     <Routes>
      <Route path='/dashboard' element={
        <DashboardContext>
           
              <Dashbord/>
           
        </DashboardContext>}/>     
      <Route path='/add-user' element={
        
           <AddUser/>
        }/>
      <Route path='/edit-user/:id' element={
      
         <EditUser/>
       }/>
     
      <Route path='/nested-sample' element={<NeatedExample/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='home' element={<Home/>}/>
          {/* <Route path='UseRef' element={<UseRef/>}/>
         <Route path='UseReducer' element={<UseReducer/>}/> */}

      </Route>
     
      <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
      
    </Routes>
   
  </BrowserRouter>
  </ContextUsingData>
  </div>
  
}

export default App;
