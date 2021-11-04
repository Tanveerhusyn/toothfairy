import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from 'pages/Users';
import Dashboard from 'components/Dashboard';
import UserDetails from 'pages/UserDetails';
import MedicalDetails from 'pages/MedicalDetails';
import Aitrack from 'pages/AiTrack';
import EditUser from 'pages/EditUser';
import CaptureDetails from 'pages/CaptureDetails';
import Detect from 'pages/Dectect';
import Sidebar from 'components/Sidebar';
import Login from 'components/Login';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import { Divider } from '@mui/material';

function App() {

    const [isLogged,setisLogged] = React.useState(false);
    return (
        <div className='bg-gray-100 ' style={{paddingTop:'2px',height:'100%'}}>
        
        {
            isLogged?(
                <div>
          <Sidebar isLogged ={isLogged} setisLogged ={setisLogged} />
        
          <div className="md:ml-64 ">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/Users" component={Users} />
              <Route exact path="/Users/Userdetails" component={UserDetails} />
              <Route exact path="/Users/Userdetails/Edituser" component={EditUser} />
              <Route exact path="/Users/Userdetails/Medicalhistory" component={MedicalDetails} />
              <Route exact path="/aitrack" component={Aitrack} />
              <Route exact path="/aitrack/capturedetails" component={CaptureDetails} />
              <Route exact path="/detect/capturedetails" component={CaptureDetails} />
              <Route exact path="/detect" component={Detect} />

              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
            ):(
                <Login isLogged = {isLogged} setisLogged= {setisLogged}/>
            )
        }
          
        </div>
    );
}

export default App;
