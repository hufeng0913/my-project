import React from 'react'
import { Header } from './Header'
import { CommunityMsg } from './CommunityMsg'

export const Community = (props)=> (
    <React.Fragment>
        <Header headerStyle={{leftIcon:"icon icon-return", titel:"社区", rightIcon:"icon icon-addcommunity", icon:true}} {...props.history} onLoad={()=>props.changeNav}/>
        <CommunityMsg/>
    </React.Fragment>
)