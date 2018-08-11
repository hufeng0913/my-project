<template>
    <div class="aui-nav">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-sm-3" v-for="item of content" :key="item.id">
                <a href="javascript:;">
                    <span class="aui-cell-img"><img :src="item.src" alt=""></span>
                    <div class="mui-media-body" v-text="item.value"></div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import p1 from '../assets/images/icon/icon-1.png'
    import p2 from '../assets/images/icon/icon-2.png'
    import p3 from '../assets/images/icon/icon-3.png'
    import p4 from '../assets/images/icon/icon-4.png'

    export default {
        name: 'index-class',
        data() {
            return {
                content: [
                    {id: 1, value: '热销单品', src: p1},
                    {id: 2, value: '今日上新', src: p2},
                    {id: 3, value: '优惠套装', src: p3},
                    {id: 4, value: '秒杀专场', src: p4},
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
</style>

