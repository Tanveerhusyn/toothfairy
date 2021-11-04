import React from "react";
import {Divider,Avatar} from '@mui/material';
import {Edit} from '@mui/icons-material';
import { Link } from "react-router-dom";

function Udetails() {
  return (
    <div style={{background:'white', width:'100%', height:'80%'}} >
      <div className="md:flex p-4">
        <div className="pt-4  p-1 w-full">
        <div className="flex flex-row justify-between">
            <div className ="font-semibold">User</div>
            <Link to ="/Users/Userdetails/Edituser"> 
            <a href ='#' className="flex p-1" >
              <Edit style ={{color: 'blue', width:'25px'}}/>
                <p style ={{color:'blue'}}>Edit Details</p>
            </a></Link>
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <div className="flex flex-col">
            <p style={{color:'gray',fontSize:'small'}} className ="p-2">Account Details</p>
            <div className="flex justify-between">
              <Avatar style ={{width:'100px',height:'100px', margin:'20px'}}src ="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              <p style={{color:'gray',fontSize:'small'}} className ="p-2 mt-10">Profile Image</p>
            </div>
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <div className="flex flex-row justify-between">
            <p className ="p-2">Pranav Deugi</p>
            <div className="flex p-2" >
            <p style={{color:'gray',fontSize:'small'}} className ="p-2">Full Name</p>

            </div>
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <div className="flex flex-row justify-between">
            <p className ="p-2">3 June 1986</p>
            <div className="flex p-2" >
            <p style={{color:'gray',fontSize:'small'}} className ="p-2">Date of Birth</p>

            </div>
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <div className="flex flex-row justify-between">
            <p className ="p-2">Male</p>
            <div className="flex p-2" >
            <p style={{color:'gray',fontSize:'small'}} className ="p-2">Gender</p>

            </div>
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <div className="flex flex-row justify-between">
            <p className ="p-2">99 Stoneygate Road, </p>
            <div className="flex p-2" >
            <p style={{color:'gray',fontSize:'small'}} className ="p-2">Address</p>

            </div>
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <div className="flex flex-row justify-between ">
            <p className ="p-2 ">pranav@toothfairy app.co.uk (Not verified) </p>
            <div className="flex p-2" >
            <p style={{color:'gray',fontSize:'small'}} className ="p-2">Email</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Udetails;
