import React,{useState,useEffect,useContext} from "react"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
import Section from "./Section"
import MailSection from "./MailBody"
import {UserContext} from "../../App"

const MailMain = (props) => {
    const [state, setstate] = useState()
    useEffect(()=>{
        if(props.my == 2){
            setstate(2)
        }
        else{
            setstate()
        }
    },[props.my])
    const context = useContext(UserContext)
    const handleClick = (item) =>{
        context.dispatch({type:"active", value:item})
        console.log(context.state.active)
    }

    const Main = context.state.data.filter((item)=> item.delete == false && item.spam == false).map((item)=> <div>
        <Section state={state} keys={item.id} delete={item.delete} id={item.id} email={item.email} handleClick={(event)=> handleClick(event)} subject={item.subject} content={item.content} />
    </div>)

    const FilterSection = context.state.data.filter((item)=> item.id === context.state.active).map((item)=>
        <MailSection email={item.email} subject={item.subject} content={item.content} />    
    )

    const Screen = context.state.data.filter((it)=> it.delete == true ).map((item)=> <div>
        <Section keys={item.id} delete={item.delete} id={item.id} email={item.email} handleClick={(event)=> handleClick(event)} subject={item.subject} content={item.content} />
        </div>
    ) 
    const MainScreen = state === 2 ? Screen : Main ;
    return (
        <div>
            <div style={context.state.active === null ? {display:"none"}:{display:"block"}} >
                {FilterSection}
            </div>
            {MainScreen}
        </div>
    );
}

export default MailMain;
