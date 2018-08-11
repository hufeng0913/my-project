import React from 'react'
import { Header } from './Header'
import DoShoppingCartList from '../containers/DoShoppingCartList'
import DoShoppingCartSettlement from '../containers/DoShoppingCartSettlement'

export const ShoppingCart = (props)=> (
    <React.Fragment>
        <Header headerStyle={{leftIcon:"icon icon-return", titel:"购物车", rightContent:"编辑", icon:false}} {...props.history}/>
        <DoShoppingCartList/>
        <DoShoppingCartSettlement/>
    </React.Fragment>
)