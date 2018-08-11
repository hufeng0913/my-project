<template>
    <div>
        <header id="header" class="mui-bar mui-bar-transparent">
            <a class="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left" style="color:#666" @click="go"></a>
            <h1 class="mui-title"></h1>
            <a class="mui-icon mui-icon-paperplane mui-pull-right" style="color:#666"></a>
        </header>
        <a><img :src="goodsList.src"></a>
        <div class="aui-title-h b-line">
		<h3 v-text="goodsList.titel"></h3>
		<p>修身九分西装裤小脚高腰休闲西裤女装anna家32176</p>
		<em v-text="goodsList.price">¥81.25</em>
		<i>价格 ¥121.25</i>
		<div class="aui-title-sp "><span class="mui-icon-extra mui-icon-extra-heart">销量 34</span>  <span class="mui-icon-extra mui-icon-extra-heart" v-text="'收藏'+collection+'人'"></span>  <span class="mui-icon-extra mui-icon-extra-heart">顺丰快递</span>  </div>
	</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'goods-msg',
        computed: {
            ...mapGetters([
                'goodsList', 'collection'
            ])
        },
        methods: {
            go() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
        height: 22rem;
    }
</style>

