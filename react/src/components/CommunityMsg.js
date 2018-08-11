import React from 'react'
import p1 from '../images/user-img0.jpg'
import p2 from '../images/s_sq_01.png'
import p3 from '../images/s_sq_02.png'
import p4 from '../images/s_sq_03.png'

let datas=[
	{id:1, pic:p1, pics:[p2, p3, p4], span:'我是郭小帅', p:"[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....", em:"刚刚"}
]
export const CommunityMsg = ()=> (
    <React.Fragment>
        {datas.map(
            item=> (
                <article key={item.id} style={{marginTop:"2.5rem"}}>
                    <div className="community-head">
                        <img src={item.pic}/>
                        <span>{item.span}</span>
                        <p>{item.p}</p>
                    </div>
                    <ul className="community-content">
                        {item.pics.map(
                            (items, index)=> <li key={index}><img src={items.pics}/></li>
                        )}
                    </ul>
                    <div className="cl"></div>
                    <div className="community-foot">
                        <em>{item.em}</em>
                        <i className="icon icon-share"></i>
                    </div>
                </article>
            )
        )}
    
    </React.Fragment>
)