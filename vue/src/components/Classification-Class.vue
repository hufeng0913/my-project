<template>
    <div class="mui-content">
        <div class="aui-nav">
            <h2 class="b-line" v-text="title"></h2>
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-sm-3 b-line" v-for="item of content" :key="item.id">
                    <a href="#" class="b-line">
                        <span class="aui-cell-img"><img :src="item.src" alt=""></span>
                        <div class="mui-media-body" v-text="item.value"></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import p1 from '@/assets/images/q1.png'
    import p2 from '@/assets/images/q2.png'
    import p3 from '@/assets/images/q3.png'
    import p4 from '@/assets/images/q4.png'
    import p5 from '@/assets/images/q5.png'
    import p6 from '@/assets/images/q6.png'
    import p7 from '@/assets/images/q7.png'
    import p8 from '@/assets/images/q8.png'
    import p9 from '@/assets/images/q9.png'
    import p10 from '@/assets/images/q10.png'
    import p11 from '@/assets/images/q11.png'
    import p12 from '@/assets/images/q12.png'
    import p13 from '@/assets/images/q13.png'
    import p14 from '@/assets/images/q14.png'
    import p15 from '@/assets/images/q15.png'
    import p16 from '@/assets/images/q16.png'

    export default {
        name: 'classification-class',
        data() {
            return {
                title: '全部分类',
                content: [
                    {id: 1, value: '裙子', src: p1},
                    {id: 2, value: '上衣', src: p2},
                    {id: 3, value: '短袖', src: p3},
                    {id: 4, value: '牛仔裤', src: p4},
                    {id: 5, value: '针织衫', src: p5},
                    {id: 6, value: '背带裤', src: p6},
                    {id: 7, value: '运动裤', src: p7},
                    {id: 8, value: '九分裤', src: p8},
                    {id: 9, value: '风衣', src: p9},
                    {id: 10, value: '西服', src: p10},
                    {id: 11, value: '牛仔褂', src: p11},
                    {id: 12, value: '卫衣', src: p12},
                    {id: 13, value: '棒球服', src: p13},
                    {id: 14, value: '衬衫', src: p14},
                    {id: 15, value: '打底衫', src: p15},
                    {id: 16, value: '冲锋衣', src: p16},
                ]
            }
        }
    }
</script>

<style scoped>
    .mui-table-view-cell {
        position: relative;
        padding-bottom: 0;
        padding-top: 0;
        border-right: .5px solid #ccc;
    }
    .mui-content {
        padding-top: 44px;
    }
</style>
