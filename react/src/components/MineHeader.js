import React from 'react'
import { Link } from 'react-router-dom'
import p1 from '../images/user_bg.png'
import p2 from '../images/user-img0.jpg'
import p3 from '../images/indent.png'

let datas = [
    {id:1, class:"icon icon-f1", content:"待付款"},
    {id:2, class:"icon icon-f2", content:"待收货"},
    {id:3, class:"icon icon-f3", content:"已收货"},
    {id:4, class:"icon icon-f4", content:"已取消"},
    {id:5, class:"icon icon-f5", content:"售后"}
]
export const MineHeader = (props)=> (
    <article className="user-head">
		<div className="user-bg-img">
			<img src={p1}/>
        <div className="user-img" style={{overflow:"inherit"}} onLoad={()=> props.updataInput('username', localStorage.getItem('name'))}>
				<img src={p2} style={{marginBottom:".5rem"}}/>
                <Link to="./login" style={{margin:".8rem 0 0 .8rem"}}>{props.username.length === 0 ? "未登录" : props.username}</Link>
			</div>
		</div>
		<div className="user-order">
			<a href="javascript:;" className="select-btn select-btn-t"><img src={p3}/>我的订单 	<span>查看所有订单</span>	 <i className="icon icon-select"></i></a>
		</div>
		<div className="user-nav">
            {datas.map(
                item=> (
                    <a href="javascript:;" key={item.id}>
                        <i className={item.class}></i>
                        {item.content}
                    </a>
                )
            )}
		</div>
	</article>
)