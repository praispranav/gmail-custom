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
import { Link } from "react-router-dom"
import SideBar from "./SideNav"

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
