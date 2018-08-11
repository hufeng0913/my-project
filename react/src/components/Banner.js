import React, { Component } from 'react'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import p1 from '../images/banner1.jpg'
import p2 from '../images/banner2.jpg'
import p3 from '../images/banner3.jpg'

let p = [{id:1, pic:p1}, {id:2, pic:p2}, {id:3, pic:p3}]
export default class Banner extends Component {
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {p.map((item, index)=> (
                        <div className="swiper-slide" style={{backgroundImage:`URL(${item.pic})`}} key={item.id}></div>
                    ))}
                </div>
                <div className="swiper-pagination swiper-pagination-white"></div>
            </div>
        )
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            spaceBetween: 0,
            loop: true,
            lazy: true,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }
}
    


    
