import React,{ useEffect, useContext } from 'react'
// import Typography from "@material-ui/core/Typography"
import { UserContext } from "../App"
import Nav from "./Nav/Nav.jsx"
import { Switch, Route } from "react-router-dom"
import MailMain from './Mails/MailMain'

import Mails from "./data"
// import MailSection from './Mails/MailBody'

function ComponentsManager() {
    const context = useContext(UserContext)
    useEffect(() => {
        context.dispatch({type:"mails", value: Mails})
    }, [])
    return (
        <div>
            {/* <Typography variant="h6"> Count --{context.currentState.pranavState}</Typography> */}
            <Nav />
            <Switch>
                <Route exact path="/delete">
                    <h1>Helllo</h1>
                </Route>
                <Route path="/">
                    <MailMain />
                </Route>
            </Switch>
        </div>
    )
}

// export const context = useContext(UserContext)
export default ComponentsManager
