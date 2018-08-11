import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import DoLoaddding from '../containers/DoLoadding'

let datas = [
    {id:1, label:"用户名：", type:"text", placeholder:"请输入您的用户名", class:"", name:"username"},
    {id:2, label:"密码：", type:"password", placeholder:"请输入您的密码", class:"mui-input-clear", name:"password"},
    {id:3, label:"确认密码：", type:"password", placeholder:"请您再次输入密码", class:"mui-input-clear", name:"rePassword"}
]
export const Register = (props)=> (
    <React.Fragment>
        <Header headerStyle={{leftIcon:"icon icon-return", titel:"注册", rightContent:"", icon:false}} {...props.history}/>
        <form className="mui-input-group" style={{marginTop:"2.5rem"}}>
            {datas.map(
                item=> (
                    <div className={item.class} key={item.id}>
                        <label>{item.label}</label>
                        <input type={item.type} placeholder={item.placeholder} name={item.name} value={props[item.name]} onChange={(ev)=> props.updataInput(ev.target.name, ev.target.value)}/>
                    </div>
                )
            )}
            <div className="mui-button-row" style={{paddingTop:"20px", paddingBottom:"10px", height:"auto"}}>
                <a type="button" className="mui-btn mui-btn-primary" href="javascript:;" style={{width:"90%", padding:"10px 0"}} onClick={()=> props.checkInput(props)}>立即注册</a>
            </div>
            <div style={{paddingBottom:"10px", textAlign:"right", paddingRight:"15px"}}>
                <Link to="/login">已有账号登录</Link>
            </div>
        </form>
        <DoLoaddding/>
    </React.Fragment>
)