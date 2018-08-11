import React from 'react'
import { Link } from 'react-router-dom'
import p1 from '../images/d_sp_01.jpg'
import p2 from '../images/d_sp_02.png'
import p3 from '../images/d_sp_03.png'
import p4 from '../images/d_sp_04.png'
import p5 from '../images/d_sp_05.png'
import p6 from '../images/d_sp_06.png'

let datas=[
	{id:1, pic:p1, content:'收款海绵包包', to:"/productDetails", price:"￥68.00", p:"$175.00", count:0, checked:1},
	{id:2, pic:p2, content:'百搭学院背包单双肩包', to:"/productDetails", price:"￥18.00", p:"$135.00", count:0, checked:1},
	{id:3, pic:p3, content:'背包单双肩包', to:"/productDetails", price:"￥108.00", p:"$225.00", count:0, checked:1},
    {id:4, pic:p4, content:'百搭风英伦背包单肩包', to:"/productDetails", price:"￥699.00", p:"$755.00", count:0, checked:1},
    {id:5, pic:p5, content:'风英伦背包单双肩包', to:"/productDetails", price:"￥88.00", p:"$85.00", count:0, checked:1},
	{id:6, pic:p6, content:'潮流单双肩包', to:"/productDetails", price:"￥148.00", p:"$155.00", count:0, checked:1}
]
export const HeaderFoods = ({changeGoods})=> (
	<React.Fragment>
		<article style={{marginBottom: 0}}>
			<h1>精选促销</h1>
		</article>
		<div className="commodity-box">
			<ul className="commodity" style={{display:"flex",flexWrap:"wrap"}}>
				{datas.map(
					item=> (
						<li key={item.id} style={{float:"inherit"}}>
							<a onClick={()=> changeGoods(item)}>
								<img src={item.pic}/>
								<span>{item.content}</span>
								<span className="price">{item.price} <s>{item.p}</s></span>
							</a>
						</li>
					)
				)}
			</ul>	
		</div>
	</React.Fragment>
)