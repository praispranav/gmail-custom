import React,{useState,useContext} from 'react';
import {UserContext} from "../../App"

import Typography from "@material-ui/core/Typography"

import CloseIcon from "@material-ui/icons/Close"
import BlockIcon from "@material-ui/icons/Block"
// import MenuIcon from "@material-ui/icons/Menu"
import MailIcon from "@material-ui/icons/Mail"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
// import SearchIcon from "@material-ui/icons/Search"
import DeleteIcon from "@material-ui/icons/Delete"


import "./nav.css"
import { Link } from "react-router-dom"

const SideBar = (props) =>{
    return(
        <div style={props.open ? {display:"block"}: {display:"none"}}>
            <div style={{width:"100vw",position:"fixed", zIndex:"100", top:"0", display:"flex"}}>
                <div style={{width:"85vw",height:"100vh", background:"white"}}>
                    <div style={{textAlign:"right", marginTop:"1em", marginRight:"1em"}}>
                        <CloseIcon onClick={()=> props.close()} style={{fontSize:"25px",color:"black", alignText:"right"}}/>
                    </div>
                    <Link to="">
                    <div style={{ marginTop:"1em",textTransform:"none" ,marginLeft:"10%",display:"flex", alignItems:"center"}}>
                            <MailIcon style={{fontSize:"20px"}}/>
                            <Typography variant="h6" style={{marginLeft:"0.8em"}}><small>Mails</small></Typography>
                    </div>
                    </Link>
                    <Link to="/delete">
                    <div style={{marginTop:".5em" ,marginLeft:"10%",alignItems:"center",display:"flex"}}>
                        <DeleteIcon style={{fontSize:"20px"}}/>
                        <Typography variant="h6" style={{marginLeft:"0.8em"}}><small>Delete</small></Typography>
                    </div>
                    </Link>
                    <Link to="/labelled">
                    <div style={{marginTop:".5em" ,marginLeft:"10%",alignItems:"center",display:"flex"}}>
                        <LabelImportantIcon style={{fontSize:"20px"}}/>
                        <Typography variant="h6" style={{marginLeft:"0.8em"}}><small>Labelled</small></Typography>
                    </div>
                    </Link>
                    <Link to="/spam">
                    <div style={{marginTop:".5em" ,marginLeft:"10%",alignItems:"center",display:"flex"}}>
                        <BlockIcon style={{fontSize:"20px"}}/>
                        <Typography variant="h6" style={{marginLeft:"0.8em"}}><small>Spam</small></Typography>
                    </div>
                    </Link>
                </div>
                <div onClick={()=> props.close()} style={{height:"100vh",width:"40vw", background:"rgba(0,0,0,0.3)"}}>

                </div>
            </div>
        </div>
    )
}

export default SideBar