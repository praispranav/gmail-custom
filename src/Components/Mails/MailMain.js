import React,{useContext} from "react"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
import Section from "./Section"
import MailSection from "./MailBody"
import {UserContext} from "../../App"

const MailMain = () => {1232
    const context = useContext(UserContext)
    const handleClick = (item) =>{
        context.dispatch({type:"active", value:item})
        console.log(context.state.active)
    }
    const handleChange = (id) ={
        console.log("You id",id )
    }
    const Main = context.state.data.map((item)=> <div>
        <Section keys={item.id} handleChange={(event)=> handleChange(event)} id={item.id} email={item.email} handleClick={(event)=> handleClick(event)} subject={item.subject} content={item.content} />
    </div>)

    const FilterSection = context.state.data.filter((item)=> item.id === context.state.active).map((item)=>
        <MailSection email={item.email} subject={item.subject} content={item.content} />    
    )
    const Array = context.state.data.map((item)=> <h1>{item.id}</h1>)
    return (
        <div>
            <div style={context.state.active === null ? {display:"none"}:{display:"block"}} >
                {FilterSection}
            </div>
            {Main} 
        </div>
    );
}

export default React.memo(MailMain);
