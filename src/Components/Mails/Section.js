// import { Button, Paper, Typography } from '@material-ui/core';
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import React,{useState,useContext} from 'react';
import { UserContext } from "../../App"
// import UserIcon from "@material-ui/icons/User"
import AccountCircle  from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Section = (props) => {
    const context = useContext(UserContext);

    const [ Open , setOpen ] = useState(false);
    // const [ Mouse , setMouse ] = useState(false)
    const SearchDisplay = Open ? 'block' : "none" ;
    const BackgroundMouseOver = null;
    return(
        <Paper style={{marginTop:"2px",paddingTop:"15px",paddingLeft:"15px",borderRadius:"0", width:"96vw", height:"5em", background:BackgroundMouseOver}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <AccountCircle fontSize="large"/>
            <div style={{marginLeft:"15px", width:"80%"}} onClick={()=> props.handleClick(props.id)}>
                <Typography variant="h6">{props.subject.slice(0,34)}</Typography>
                <Typography variant="p"><small>{props.content.slice(0,25)}....</small></Typography><br/>
                <Typography variant="p">{props.email}</Typography>
            </div>
            <MoreVertIcon onClick={()=> setOpen(!Open)} />
            <Paper style={{position:"absolute",padding:"0.7em",height:"auto",width:"3em",display:SearchDisplay, right:"20px"}}>
               <Typography variant="p" onClick={()=> context.dispatch({type:"delete", value:props.id})} style={{paddingTop:"1001.8em"}}>Delete</Typography><br />
               <Typography variant="p" style={{marginBottom:".8em"}}>Star</Typography><br/>
               <Typography variant="p">Spam</Typography>
            </Paper>
        </div>
    </Paper>
    )
}

export default React.memo(Section);