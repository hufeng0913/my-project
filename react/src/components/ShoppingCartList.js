import React from 'react'
import p1 from '../images/sjlogo.png'

export const ShoppingCartList = ({ catDatas, add, reduce, checked})=> (
    <form className="setCmp" style={{margin:"2.5rem 0 6.2rem"}}>
        {catDatas.map(
            item => (
                <React.Fragment key={item.id}>
                    <div className="Cart">
                        <div className="payment">
                            <input type="checkbox" className="radio-la" id={`doc-radio-${item.id}`} defaultChecked />
                            <label htmlFor={`doc-radio-${item.id}`} onClick={()=> checked(item.id)}></label>
                        </div>
                        <a href="javascript:;" className="select-btn select-btn-t"><img src={p1}/>首款海绵包包</a>
                    </div>
                    <article className="confirmOrder">
                        <img src={item.pic}/>
                        <div className="product-text">
                            <span>{item.content}</span>
                            <span className="hue">颜色：黑色</span>
                            <span className="price price-cart">
                                {item.price}
                                <div className="norms-content-t norms-content-two">
                                    <span className="icon norms-out" onClick={()=>add(item.id)}></span>
                                    <span style={{width: "auto"}}>{item.count}</span>
                                    <span className="icon norms-add" onClick={()=>reduce(item.id)}></span>
                                </div>
                            </span>
                        </div>
                    </article>
                </React.Fragment>
            )
        )}
    </form>
)