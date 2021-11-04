import { useLocation,Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import GroupIcon from "@mui/icons-material/Group";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Sidebar from "./Sidebar";
import {Divider} from '@mui/material';
import useBreadcrumbs from 'use-react-router-breadcrumbs';


export default function AdminNavbar({ showSidebar, setShowSidebar, Ticon, setTicon }) {
  const location = useLocation().pathname;
  const breadcrumbs = useBreadcrumbs()
  const sp = location.split('/');


  const arr = []

  function capitalizeFirstLetter(string) {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return (
    <div style ={{boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',zIndex:'999',marginBottom:'30px'}} >
      <nav className="bg-gray-100 md:ml-64 h-20">
        <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
          <div className="md:hidden pb-28">
            <Button
              color="black"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("left-0")}
            >
              <Icon name="menu" size="4xl" color="black" />
            </Button>

            <div
              className={`absolute top-2 md:hidden ${
                showSidebar === "left-0" ? "left-64" : "-left-64"
              } z-50 transition-all duration-300`}
            >
              <Button
                color="transparent"
                buttonType="link"
                size="lg"
                iconOnly
                rounded
                ripple="light"
                onClick={() => setShowSidebar("-left-64")}
              >
                <Icon name="close" size="3xl" color="black" />
              </Button>
            </div>
          </div>
          {/* className ="container max-w-full mx-auto flex flex-col items-left md:pr-8 pl-10 sm:hidden " */}
           
        
        <div role="presentation" style ={{marginBottom: '130px'}} className="hidden lg:flex ">

              <Breadcrumbs aria-label="breadcrumb" style ={{paddingTop:'8px'}} >
                <div className="flex flex-col">
                <div className ="flex flex-row">
              {Ticon}
               <div style ={{marginLeft: '5px'}}></div>
               <Typography sx ={{color: 'black', fontWeight:'bold', fontSize: 'large'}} >
                 {`${capitalizeFirstLetter(sp[sp.length-1])}`}
                </Typography>
               </div>
                
                <div className = "flex flex-row" >
                <Link
                  to="/"
                  style={{ fontWeight: "bold" }}
                >
                 <div>{"Home"}</div>
                </Link>
              
                <Typography color="text.Secondary" style ={{display:'flex',marginLeft:'10px'}}>
                {
               
               sp.map((ch)=>{
                   if(ch!==""){
                     console.log("CH",ch);
                      
                      return(ch.match(sp[sp.length-1])?<div >{` > ${capitalizeFirstLetter(ch)}`}</div>:<Link style ={{color:'black'}} to ={`/${ch=="Userdetails"?'Users/Userdetails':capitalizeFirstLetter(ch)}`}>{`>${capitalizeFirstLetter(ch)}`}</Link>);

                   }
                   
               })
             }
              
                </Typography>
                </div>
                </div>
              </Breadcrumbs>
              
             
          </div>
         
          </div>
        
      </nav>
    
    </div>
  );
}
