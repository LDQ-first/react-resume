import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { ConnectedRouter } from 'react-router-redux'

import Bundle from './bundle'
import Loading from '../components/Loading/Loading'


import NotFound from 'bundle-loader?lazy&name=notFound!../views/NotFound/NotFound'
import Home from 'bundle-loader?lazy&name=Home!../views/Home/Home'


import createHistory from 'history/createHashHistory'


import {home} from './link.js'

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
)

let open = false


const getRouter = () => (
    <ConnectedRouter history={createHistory()}>  
        <div>
            <Switch>             
                <Route exact path={home} component={createComponent(Home)}/>
                <Route component={createComponent(NotFound)}/>
            </Switch>
        </div>
         
    </ConnectedRouter>
)
export default getRouter
