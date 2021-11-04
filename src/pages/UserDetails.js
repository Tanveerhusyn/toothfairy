import React from 'react'
import Card from 'components/Card'
import MedicalCard from 'components/MedicalCard'
import Udetails from 'components/Udetails'
import BookingNotes from 'components/BookingNotes'
import { Link } from 'react-router-dom'
function UserDetails() {
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

        <div className='flex relative justify-start md:justify-center  overflow-auto' style ={{height:'140px', width:'100%',marginLeft:'30px'}}>
            <div style={{marginRight:'30px'}}>
                <Link to="/Users/Userdetails/Medicalhistory"> <Card title ="Medical History" stitle ="Not added"/></Link>
            </div>
            <div  style={{marginRight:'30px'}}>
            <Card title ="AI Track" stitle ="21"/>
            </div>
            <div  style={{marginRight:'30px'}}>
            <Card title ="Detect" stitle ="0"/>
            </div> 
           
        </div>
        <div style ={{display:'flex',flexDirection:'column'}} className='sm:w-64 md:w-8/12'>
            <div style={{marginBottom:'20px',width:'100%'}}> <MedicalCard/></div>
            <div style={{marginBottom:'20px',width:'100%'}}> <Udetails/></div>
            <div style={{marginBottom:'20px',width:'100%'}}><BookingNotes/></div>
       
        
         
        </div>
        </div>
    )
}

export default UserDetails
