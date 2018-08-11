import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import DoHome from '../containers/DoHome'
import { GuardCommunity } from '../guards/GuardCommunity'
import { Error } from './Error'
import { GuardMine } from '../guards/GuardMine'
import { GuardShoppingCart } from '../guards/GuardShoppingCart'
import DoNav from '../containers/DoNav'
import DoLogin from '../containers/DoLogin'
import DoRegister from '../containers/DoRegister'
import DoProductDetails from '../containers/DoProductDetails'

export const Router = ()=> (
    <BrowserRouter>
        <React.Fragment>
            <Switch>
                <Redirect exact from="/" to="/home"></Redirect>
                <Route exact path="/home" component={DoHome}></Route>
                <Route path="/community" component={GuardCommunity}></Route>
                <Route path="/shoppingCart" component={GuardShoppingCart}></Route>
                <Route path="/mine" component={GuardMine}></Route>
                <Route path="/login" component={DoLogin}></Route>
                <Route path="/register" component={DoRegister}></Route>
                <Route path="/productDetails" component={DoProductDetails}></Route>
                <Route component={Error}></Route>
            </Switch>
            <DoNav/>
        </React.Fragment>
    </BrowserRouter>
)
    
