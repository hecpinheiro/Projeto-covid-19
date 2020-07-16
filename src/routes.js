import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Statesbr from "./pages/statesbr"
import Main from './pages/main'

const Routes = () => ( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/states/:id" component={Statesbr}/>
        </Switch>
    </BrowserRouter>
)

export default Routes