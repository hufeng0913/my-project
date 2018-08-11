import React from 'react'
import { Link } from 'react-router-dom'

export const ProductDetailsFooter = ({ addCat, goodsNum })=> (
    <div className="add-shopping">
    	<a href="javascript:;" className="shopping-btn">
    		<em>{goodsNum}</em>
    		<i className="icon icon-car"></i>
    	</a>
    	<Link to="/shoppingCart" className="btn btn-red fr">立即购买</Link>
    	<a href="javascript:;" className="btn btn-yellow fr" onClick={()=> addCat()}>加入购物车</a>
    	<div className="cl"></div>
    </div>
)