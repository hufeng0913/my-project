import React from 'react'
import { Header } from './Header'
import Banner from './Banner'
import { HeaderNav } from './HeaderNav'
import { HeaderCustomers } from './HeaderCustomers'
import DoHeaderFoods from '../containers/DoHeaderFoods'

export const Home = (props)=> (
    <React.Fragment>
        <Header headerStyle={{leftIcon:"icon icon-menu", titel:"京西商城", rightIcon:"icon icon-soso", icon:true, to:true}} {...props.history}/>
        <Banner/>
        <HeaderNav/>
        <HeaderCustomers/>
        <DoHeaderFoods {...props.history}/>
    </React.Fragment>
)