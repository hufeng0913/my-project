<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage:str.url}" :key= "str.id"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import p1 from '@/assets/images/banner1.jpg'
    import p2 from '@/assets/images/banner2.jpg'
    import p3 from '@/assets/images/banner3.jpg'
    import p4 from '@/assets/images/banner4.jpg'

    export default {
        name: 'index-banner',
        data() {
            return {
                listImg: [
                    {
                        id: 1,
                        url: 'url(' + p1 + ')'
                    },
                    {
                        id: 2,
                        url: 'url(' + p2 + ')'
                    }, 
                    {
                        id: 3,
                        url: 'url(' + p3 + ')'
                    }, 
                    {
                        id: 4,
                        url: 'url(' + p4 + ')'
                    }
                ]
            }
        },
        mounted() {
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
            },
            });
        }
    }
</script>

<style>
    .swiper-container {
        width: 100%;
        height: 15rem;
        margin-left: auto;
        margin-right: auto;
        }
        .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        background-size:100% 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
