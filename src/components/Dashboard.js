import React from 'react'
import CloudOffIcon from '@mui/icons-material/CloudOff';
function Dashboard() {

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100 flex-col' style ={{overflowY:'hidden'}}>
            <CloudOffIcon style ={{width:'200px',height:'200px'}}/>
            <h1 style={{fontWeight:'bold', fontSize:'2rem'}}>Under Development</h1>
            <p>This page is under development. You will be notified
                once it is available and ready to use.
            </p>
        </div>
    )
}

export default Dashboard;
