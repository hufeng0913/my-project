import React from 'react'
import DoProductDetailsHeader from '../containers/DoProductDetailsHeader'
import DoProductDetailsContent from '../containers/DoProductDetailsContent'
import DoProductDetailsFooter from '../containers/DoProductDetailsFooter'
import { Header } from './Header'

export const ProductDetails = (props)=> (
    <React.Fragment>
        <Header headerStyle={{leftIcon:"icon icon-return", titel:"产品详情", rightIcon:"icon icon-addcommunity", icon:false}} {...props.history} onLoad={()=>props.changeNav}/>
        <DoProductDetailsHeader/>
        <DoProductDetailsContent/>
        <DoProductDetailsFooter/>
    </React.Fragment>
)