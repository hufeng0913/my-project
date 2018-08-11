import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({navDatas, changeNav})=> (
    <footer style={{display: navDatas.show ? "block" : "none", zIndex:999}}>
			{navDatas.datas.map((item, index)=> (
				<Link to={item.to} className={navDatas.activeNum === index ? "pick" : ""} key={item.id} onClick={()=> changeNav(index)}>
					<i className={item.class}></i>
					{item.content}
				</Link>
			))}
    </footer>
)