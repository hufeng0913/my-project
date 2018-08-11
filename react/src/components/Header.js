import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({headerStyle, go})=> (
    <header>
        <div className="header">
            <Link to={headerStyle.to ? "/12" : "/"}><i className={headerStyle.leftIcon}></i></Link>
            <h1>{headerStyle.titel}</h1>
            <i className={headerStyle.rightIcon} style={{display: headerStyle.icon ? "block" : "none"}}></i>
            <Link to="/" className="cart-edit" style={{display: headerStyle.icon ? "none" : "block"}}>{headerStyle.rightContent}</Link>
        </div>
    </header>
)