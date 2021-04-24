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
        else if(props.my == 3){
            setstate(2)
        }
        else if(props.my == 4){
            setstate(4)
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
        <Section state={state} label={item.labelled} keys={item.id} delete={item.delete} id={item.id} email={item.email} handleClick={(event)=> handleClick(event)} subject={item.subject} content={item.content} />
    </div>)

    const FilterSection = context.state.data.filter((item)=> item.id === context.state.active).map((item)=>
        <MailSection email={item.email} subject={item.subject} label={item.l} content={item.content} />    
    )

    const Screen = context.state.data.filter((it)=> it.delete == true ).map((item)=> <div>
        <Section label={item.labelled} keys={item.id} delete={item.delete} id={item.id} email={item.email} handleClick={(event)=> handleClick(event)} subject={item.subject} content={item.content} />
        </div>
    ) 
    const Screen4 = context.state.data.filter((it)=> it.spam === false ).map((item)=> <div>
        <Section keys={item.id} label={item.labelled} delete={item.delete} id={item.id} email={item.email} handleClick={(event)=> handleClick(event)} subject={item.subject} content={item.content} />
        </div>
    ) 
    const Screen5 = context.state.data.filter((it)=> it.labelled == true ).map((item)=> <div>
        <Section keys={item.id} delete={item.delete} label={item.labelled} id={item.id} email={item.email} handleClick={(event)=> handleClick(event)} subject={item.subject} content={item.content} />
        </div>
    ) 
    const MainScreen = state == 2 ? Screen : Main ;
    const SpamMainScreen = state == 3 ? Screen4 : MainScreen; 
    const LabelledMainScreen = state == 4 ? Screen5 :SpamMainScreen ;
    return (
        <div>
            <div style={context.state.active === null ? {display:"none"}:{display:"block"}} >
                {FilterSection}
            </div>
            {LabelledMainScreen}
        </div>
    );
}

export default MailMain;
