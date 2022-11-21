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

function App() {
  let data={
    Earningmonthly:"40,000",
    EarningAnnual:"215,000",
    Tasks:"60",
    pendingreq:20
  }

 return <div id="wrapper">
  <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashbord data={data}/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
      <Route path='/edit-user/:id' element={<EditUser/>}/>
      <Route path='/nested-sample' element={<NeatedExample/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='home' element={<Home/>}/>

      </Route>
     
      <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
    
    </Routes>
    
  </BrowserRouter>
  </div>
  
}

export default App;
