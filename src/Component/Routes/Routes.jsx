import React from 'react'
import Home from '../Home/Home'
import {Switch , Route } from 'react-router-dom'

const Routes = () => {
    return (
        <div>
    <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
    </Switch>
        </div>
    )
}

export default Routes
