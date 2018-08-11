import React from 'react'
import p1 from '../images/scyh0.png'
import p2 from '../images/scyh1.png'
import p3 from '../images/scyh3.png'
import p4 from '../images/scyh4.png'

let datas=[
	{id:1, pic:p1, content:'海绵包包'},
	{id:2, pic:p2, content:'韩国代购'},
	{id:3, pic:p3, content:'ARC潮店'},
	{id:4, pic:p4, content:'欧力女装'}
]
export const HeaderCustomers = ()=> (
    <article>
    	<h1>商城客户</h1>
    	<div className="client">
			{datas.map(
				item=> <a href="javascript:;" key={item.id}><img src={item.pic}/><span>{item.content}</span></a>
			)}
    	</div>
    </article>
)