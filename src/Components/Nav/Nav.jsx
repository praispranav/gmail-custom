import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import React,{useState,useContext} from 'react';
import {UserContext} from "../../App"

import Typography from "@material-ui/core/Typography"

import CloseIcon from "@material-ui/icons/Close"
import MenuIcon from "@material-ui/icons/Menu"
import MailIcon from "@material-ui/icons/Mail"
import SearchIcon from "@material-ui/icons/Search"
import DeleteIcon from "@material-ui/icons/Delete"


import "./nav.css"

const SideBar = (props) =>{
    return(
        <div style={props.open ? {display:"block"}: {display:"none"}}>
            <div style={{width:"100vw",position:"fixed", zIndex:"100", top:"0", display:"flex"}}>
                <div style={{width:"85vw",height:"100vh", background:"white"}}>
                    <div style={{textAlign:"right", marginTop:"1em", marginRight:"1em"}}>
                        <CloseIcon onClick={()=> props.close()} style={{fontSize:"25px",color:"black", alignText:"right"}}/>
                    </div>
                    <div style={{alignItems:"center",justifyContent:"center", marginTop:"1.5em" ,marginRight:"30%",display:"flex"}}>
                        <DeleteIcon style={{fontSize:"20px"}}/>
                        <Typography variant="h6" style={{marginLeft:"0.8em"}}>Delete</Typography>
                    </div>
                </div>
                <div onClick={()=> props.close()} style={{height:"100vh",width:"40vw", background:"rgba(0,0,0,0.3)"}}>

                </div>
            </div>
        </div>
    )
}

const Nav = () => {
    const [IsNavOPen, setIsNavOPen] = useState(false);
    const context = useContext(UserContext)
    const This = context.state
    const Dis = context.dispatch
    const Search = This.isSearchOn === true
    return (
        <div>
            <AppBar position="sticky" style={{background:"white", zIndex:"0"}}>
                <Toolbar style={{justifyContent:"space-between"}}>
                    <div style={IsNavOPen ? {visibility:"hidden"}:{color:"black"}}>
                        <MenuIcon onClick={()=> setIsNavOPen(true)} />
                    </div>
                    
                    <div className="mobile" style={{marginLeft:"3em"}}>
                        <MailIcon style={{color:"black"}}/>
                    </div>
                    <Typography className="nav-brand" 
                        style={Search ? {display:"none"}: {display:"block"}} 
                        variant="h5">Gmail</Typography>
                    {/* <div style={{marginRight: "5%", marginLeft:"5%"}}></div> */}
                    <input type="text" 
                        style={Search ? {display:"block", width:"100%",margin:"0 5% 0 5%",
                        border:"none", background:"white"}: {display:"none"}} />
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <SearchIcon 
                            onClick={()=> Dis({type:"search"})} style={Search ? {display:"none"} : null }/>
                        <CloseIcon 
                            style={Search ? null :{display:"none"}} onClick={()=> Dis({type:"search"})} />
                        
                    </div>
                </Toolbar>
            </AppBar>
            <SideBar open={IsNavOPen} close={()=>setIsNavOPen(false)}/>            
        </div>
    );
}

export default Nav;
