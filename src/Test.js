import React,{useEffect, useState,useContext} from "react"
import { UserContext } from "./App"
import Mails from "./Components/data"

const Test = () =>{
    const context = useContext(UserContext)
    const [state, setstate] = useState([])
    // useEffect(() => {
    //     context.dispatch({type:'mails', value:Mails})
    //     // setstate(Mails)
    // }, [])
    const Array = context.state.data.map((item)=> <h1>{item.id}</h1>)
    return (
        <div>
            {Array}
        </div>
    )
}

export default Test;