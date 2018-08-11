<template>
    <div class="mui-scroll " style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media b-line">
                <a class="mui-navigate-right t-line" href="#">
                    <img class="mui-media-object mui-pull-left head-img" id="head-img" src="@/assets/images/ad1.jpg">
                    <div class="mui-media-body" v-text="name">
                    </div>
                </a>
            </li>
        </ul>
        <ul :class="item.ulclass" v-for="item of datas" :key="item.id">
            <li :class="item.liclass">
                <a :class="item.aclass" v-text="item.content" @click="go(item.content)"></a>
            </li>
        </ul>
        <ul  class="mui-table-view b-line">
            <li  class="t-line lines"><router-link to="/login" class="muis" v-text="name == '未登录' ? '立即登录' : '退出登录' "></router-link></li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'mine-center',
        data() {
            return {
                datas: [
                    {id: 1, ulclass: 'mui-table-view mui-table-view-chevron t-line', liclass: 'mui-table-view-cell b-line' , aclass: 'mui-navigate-right', content: '我的订单'},
                    {id: 2, ulclass: 'mui-table-view mui-table-view-chevron t-line', liclass: 'mui-table-view-cell b-line' , aclass: 'mui-navigate-right', content: '收货地址'},
                    {id: 3, ulclass: 'mui-table-view mui-table-view-chevron t-line', liclass: 'mui-table-view-cell b-line' , aclass: 'mui-navigate-right', content: '消息通知'},
                    {id: 4, ulclass: 'mui-table-view mui-table-view-chevron t-line', liclass: 'mui-table-view-cell b-line' , aclass: 'mui-navigate-right', content: '我的收藏'},
                    {id: 5, ulclass: 'mui-table-view mui-table-view-chevron b-line', liclass: 'mui-table-view-cell t-line' , aclass: 'mui-navigate-right', content: '关于海淘购'}
                ]
            }
        },
        computed: {
            ...mapGetters(['name'])
        },
        methods: {
            go(data) {
                switch(data) {
                    case '我的订单' : this.$router.push('/shoppingCart');
                         break;
                    case '我的收藏' : this.$router.push('/collection');
                         break;
                }
            }
        }
    }
</script>

<style scoped>
    .muis {
        color:#ff3366; 
        display:inline-block; 
        width:100%
    }
    .lines {
        text-align: center; padding:14px 0 
    }
</style>

