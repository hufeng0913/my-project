import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import DoLoaddding from '../containers/DoLoadding'

let datas = [
    {id:1, label:"用户名：", type:"text", placeholder:"请输入您的用户名", class:"", name:"username"},
    {id:2, label:"密码：", type:"password", placeholder:"请输入您的密码", class:"mui-input-clear", name:"password"}
]
export const Login = (props)=> (
    <React.Fragment>
        <Header headerStyle={{leftIcon:"icon icon-return", titel:"登录", rightContent:"", icon:false}} {...props.history}/>
        <form className="mui-input-group" style={{marginTop:"2.5rem"}} >
            {datas.map(
                item=> (
                    <div className={item.class} key={item.id}>
                        <label>{item.label}</label>
                        <input type={item.type} placeholder={item.placeholder} name={item.name} value={props[item.name]} onChange={(ev)=> props.updataInput(ev.target.name, ev.target.value)}/>
                    </div>
                )
            )}
            <div className="mui-button-row" style={{paddingTop:"20px", paddingBottom:"10px", height:"auto"}}>
                <a type="button" className="mui-btn mui-btn-primary" href="javascript:;" style={{width:"90%", padding:"10px 0"}} onClick={()=> props.checkInput(props)}>立即登录</a>
            </div>
            <div style={{paddingBottom:"10px", textAlign:"right", paddingRight:"15px"}}>
                <Link to="/register">注册账号</Link>
            </div>
        </form>
        <DoLoaddding/>
    </React.Fragment>
)