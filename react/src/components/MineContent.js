import React from 'react'
import p1 from '../images/collct.png'
import p2 from '../images/service.png'
import p3 from '../images/about.png'
import p4 from '../images/set.png'

let datas = [
    {id:1, pic:p1, content:"我的收藏"},
    {id:2, pic:p2, content:"联系客服"},
    {id:3, pic:p3, content:"关于我们"},
    {id:4, pic:p4, content:"设置"}
]
export const MineContent = ()=> (
    <article className="user-list">
        {datas.map(
            item=> (
                <a href="javascript:;" className="select-btn select-btn-t" key={item.id}><img src={item.pic}/>{item.content}<i className="icon icon-select"></i></a>
            )
        )}
	</article>
)