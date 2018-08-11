import React from 'react'
import p1 from '../images/fx02.png'
import p2 from '../images/sc02.png'
import p4 from '../images/sjlogo.png'
import p5 from '../images/tel.png'

export const ProductDetailsHeader = ({ goodDetail })=> (
    <React.Fragment>
        <div className="product-head" style={{marginTop:"2.5rem"}}>
            <a href="javascript:;"><img src={p1}/></a>
            <a href="javascript:;"><img src={p2}/></a>
            <img src={goodDetail.pic}/>
        </div>
        <article className="product-text">
            <span>{goodDetail.content}</span>
            <span className="price">{goodDetail.price} <s>{goodDetail.p}</s></span>
        </article>
        <a id="norms" href="javascript:;" className="select-btn select-btn-s">选择规格<i className="icon icon-select"></i></a>
        <a href="javascript:;" className="select-btn select-btn-t"><img src={p4}/>海绵包包 <i className="icon icon-select"></i></a>
        <a href="javascript:;" className="select-btn select-btn-t select-btn-d"><img src={p5}/>020-8888-8888</a>
    </React.Fragment>
)