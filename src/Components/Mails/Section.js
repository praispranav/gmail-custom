// import { Button, Paper, Typography } from '@material-ui/core';
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import React,{useEffect,useState,useContext} from 'react';
import { UserContext } from "../../App"
// import UserIcon from "@material-ui/icons/User"
import AccountCircle  from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Section = (props) => {
    const context = useContext(UserContext);

    const [ Open , setOpen ] = useState(false);
    const SearchDisplay = Open ? 'block' : "none" ;
    const BackgroundMouseOver = null;
    const a = context.state.delete

    const [MyDel, setMyDel] = useState(false)

    const hello = () =>{
        // const a = [1,2,3,34,3]
        console.log("hello")
        for(var x = 0; x<a.length; x++){
            if(a[x] === props.id ){
                setMyDel(true)
                console.log("Item found", a[x])
            }
        }
    }

    const [count, setCount] = useState(0)
    useEffect(()=>{
        hello();
        // updatedData();
        console.log(context.state.data)
    },[count])


    const Dispatch = () =>{
        setCount(count+1)
        // context.dispatch({}) 
        context.dispatch({type:"delete", value: true, id: props.id})
    }
    return(
        <div>                
        <Paper style={{marginTop:"2px",paddingTop:"15px",paddingLeft:"15px",borderRadius:"0", width:"96vw", height:"5em", background:BackgroundMouseOver}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <AccountCircle fontSize="large"/>
            <div style={{marginLeft:"15px", width:"80%"}} onClick={()=> props.handleClick(props.id)}>
                <Typography variant="h6">{props.subject.slice(0,34)}</Typography>
                <Typography variant="p"><small>{props.content.slice(0,25)}....</small></Typography><br/>
                <Typography variant="p">{props.email}</Typography>
            </div>
            {console.log(context.state.delete)}
            <MoreVertIcon onClick={()=> setOpen(!Open)} />
            <Paper style={{position:"absolute",padding:"0.7em",height:"auto",width:"3em",display:SearchDisplay, right:"20px"}}>
               <Typography variant="p" onClick={Dispatch} style={{paddingTop:"1001.8em"}}>Delete</Typography><br />
               <Typography variant="p" style={{marginBottom:".8em"}}>Star</Typography><br/>
               <Typography variant="p">Spam</Typography>
            </Paper>
        </div>
    </Paper>
    </div>

    )
}

export default React.memo(Section);