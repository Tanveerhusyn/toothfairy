import React,{useState} from "react";
import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'
import Vector from 'assets/Vector.svg'

import {Divider} from '@mui/material';
function MedicalCard() {
  const [checked, setChecked] = useState(true)
  const [checked2, setChecked2] = useState(true)
  const [showError, setShowError] = useState(false)

  React.useEffect(() => {
    if(!checked2){
      setShowError(true)
      setTimeout(()=>{
        setShowError(false)
      },3000)
    }
  },[checked2])
  return (
    <div style={{background:'white', width:'100%', height:'50%'}}>
      <div className="md:flex p-4">
        <div className="pt-8 pb-8 p-2 w-full">
          <div className=" p-2 text-md  font-semibold">
            Account
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <div className="flex flex-col">
            <p style={{color:'gray',fontSize:'small'}} className ="p-2">Account Details</p>
            <div className="flex justify-between">
              <p className ="p-2">123456</p>
              <p style={{color:'gray',fontSize:'small'}} className ="p-2">Account Reference ID</p>
            </div>
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <div className="flex flex-row justify-between">
            <p className ="p-2">Account Status</p>
            <div className="flex p-2 " >
              <p style={{marginRight:'30px',color:'#00cc44'}}>Active</p>
            <DragSwitch checked={checked} onColor="black" onChange={(e) => {
             setChecked(e)}}/>
            </div>
          </div>
          
          <div className="flex flex-row justify-between">
            <p className ="p-2">Profile Status</p>
            <div className="flex p-2 " >
              <p style={{marginRight:'30px',color:'#00cc44'}}>Complete</p>
            <DragSwitch checked={checked2} onColor="black" onChange={(e) => {
             setChecked2(e)}}/>
            </div>
          </div>
          <Divider sx={{width:'100%', margin:'0'}}/>
          <a href ="" className = "p-2 text-red-600">Delete</a>
        </div>
      </div>
      {showError ? (
       
       <div
         className="fixed top-0 left-0 z-50 py-3  pl-2 leading-normal   rounded-lg text-black"
         role="alert"
         style={{
          marginTop: "38%",
          marginLeft: "10px",
          color: "#fff",
          width: "245px",
          background: "#05944f",
         }}
       >
         <p>Profile status changed to<br/>
           incomplete
         </p>
         <span className="absolute inset-y-0 right-0 text-white flex items-center mr-4 cursor-pointer" onClick={() => setShowError(false)}>
           <img  src={Vector}  alt='' onClick={()=>setShowError(false)}  />
           {/* <svg
             className="w-4 h-4 text-white fill-current"
             style={{ color: "#fff" }}
             role="button"
             viewBox="0 0 20 20"
            
           >
             <path
               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
               clip-rule="evenodd"
               fill-rule="evenodd"
             ></path>
           </svg> */}

         </span>
       </div>
     ) : (
       ""
     )}
    </div>
  );
}

export default MedicalCard;
