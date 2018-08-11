import React from 'react'

export const ShoppingCartSettlement = ({totalPrice, length})=> (
    <nav className="navbar-fixed-bottom navbar-fixed-bottom-cart" style={{display: length === 0 ? 'none' : 'block'}}>
		<div className="container container-cart">
		    <div className="navbar-text navbar-left pull-left m-cart-disbursement">		合计：￥{totalPrice}
		    </div> 
	    	<a href="javascript:;" className="btn btn-warning navbar-btn pull-right">去结算</a>
	  	</div>	
	</nav>
)