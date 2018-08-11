import React from 'react'
import p1 from '../images/xq01.png'
import p2 from '../images/xq02.jpg'
import p3 from '../images/xq03.jpg'
import p4 from '../images/user-img0.jpg'
import p5 from '../images/xingxing.png'

let pics = [
    {id:1, pic:p1},
    {id:2, pic:p2},
    {id:3, pic:p3}
]
let datas=[
	{id:1, p4,p5,name:'郭小帅',date:'2016-08-24',content:'这个包包不错，值得拥有'},
	{id:2, p4,p5,name:'郭小帅',date:'2016-08-24',content:'这个包包不错，值得拥有'},
	{id:3, p4,p5,name:'郭小帅',date:'2016-08-24',content:'这个包包不错，值得拥有'},
]
let contents = [{id:1, data:'图文详情',class:'pick'}, {id:2, data:'用户评价',class:'pick'}]

export const ProductDetailsContent = ({userToEvaluate, switchList, activeNum})=> (
    <div className="product-content">
    	<ul id="tab_btn" className="product-content-ul">
		{contents.map((item,index)=> (
			<li className={index === activeNum ? item.class : ""} key={item.id} onClick={()=> switchList(item.data, index)}>
				<span>{item.data}</span>
			</li>
		))}	
    	</ul>
    	<ul className="product-content-ul2">
    		<li className="tab_content show" style={{display:userToEvaluate?'block':'none'}}>
                {pics.map(item=>(
                    <img src={item.pic} key={item.id}/>
                ))}
    		</li>
    		<li className="tab_content" style={{display:userToEvaluate?'none':'block'}}>
    			用户评价
				{datas.map(item=>(
					<div className="evaluate" key={item.id}>
						<div className="evaluate-head">
							<img src={item.p4}/>
							<p>{item.name} <span>{item.date}</span></p>
							<p><img src={item.p5}/></p>
						</div>
						<p>这个包包不错，值得拥有</p>
					</div>
				))}
    		</li>
    	</ul>
    </div>
)