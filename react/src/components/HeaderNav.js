import React from 'react'
import p1 from '../images/nav01.png'
import p2 from '../images/nav02.png'
import p3 from '../images/nav03.png'
import p4 from '../images/nav04.png'
import p5 from '../images/nav05.png'

let datas=[
	{id:1, pic:p1, content:'大聚惠'},
	{id:2, pic:p2, content:'海外购'},
	{id:3, pic:p3, content:'超市百货'},
	{id:4, pic:p4, content:'厂家直销'},
	{id:5, pic:p5, content:'美食娱乐'}
]
export const HeaderNav = ()=> (
    <nav>
    	<div className="nav-box">
			{datas.map(
				item=> <a href="javascript:;" key={item.id}><img src={item.pic}/><span>{item.content}</span></a>
			)}
    	</div>
    </nav>
)