import React,{useContext} from "react"
import CloseIcon from "@material-ui/icons/Close"
import Reply from "@material-ui/icons/Reply"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Delete from "@material-ui/icons/Delete"
import MoreVert from "@material-ui/icons/MoreVert"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {UserContext} from "../../App"

const MailSection = (props) =>{
    const context = useContext(UserContext)
    const State = context.state.activeMail
    return(
    <div style={{padding:"1em",position:"fixed",zIndex:"1", width:"96vw", height:"100vh", top:"0", background:"white"}}>
        <div style={{display:"flex", justifyContent:"space-between", marginTop:"1em"}}>
            <CloseIcon fontSize="medium" onClick={()=> context.dispatch({type:"active", value:"false"})}/>
            <div>
                <Delete fontSize="medium" style={{marginRight:"0.8em"}}/>
                <Reply fontSize="medium" style={{marginRight:"0.8em"}} />
                <MoreVert fontSize="medium"style={{marginRight:"0.8em"}}/>
            </div>
        </div>
        <div>
            <Typography variant="h5" style={{marginTop:"1.3em"}}>{props.subject}</Typography><br />
            <div style={{margin:"0.4em",display:"flex", marginTop:"1em",alignItems:"center"}}>
                <AccountCircle fontSize="large"/>
                <Typography variant="p">{props.email}</Typography>
            </div>
            <div style={{marginTop:"2em"}}>
                <Typography variant="p">{props.content}</Typography>
            </div>
        </div>
        <div style={{display:"flex",position:"absolute",width:"93vw", alignText:"center", bottom:"0px"}}>
            <Button color="primary" style={{width:"40vw", margin:"15px", marginRight:"10vw"}} variant="outlined">Reply</Button>
            <Button color="primary" style={{width:"40vw", margin:"15px",}} variant="outlined">Reply All</Button>
        </div>
    </div>
    )
}
export default MailSection