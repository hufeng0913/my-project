<template>
    <div class="aui-list t-line">
		<h2 v-text="title"></h2>
		<ul class="mui-table-view mui-grid-view">
			<li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item of content" :key="item.id">
				<a @click="go({titel: item.value, src: item.src,price: item.price, key: item.id})">
					<img class="mui-media-object" :src="item.src">
					<div class="mui-media-body" v-text="item.value"></div>
					<div class="goods_info"> <span class="price_info"></span> <span class="fav_num" v-text="item.buys"></span> </div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
    import p1 from '@/assets/images/ad1.jpg'
    import p2 from '@/assets/images/ad2.jpg'
    import p3 from '@/assets/images/ad3.jpg'
	import p4 from '@/assets/images/ad4.jpg'
	import p5 from '@/assets/images/ad1.jpg'
    import p6 from '@/assets/images/ad2.jpg'
    import p7 from '@/assets/images/ad3.jpg'
    import p8 from '@/assets/images/ad4.jpg'
    import { mapActions } from 'vuex'

    export default {
        name: 'like',
        data() {
            return {
                title: '精品优选',
                content: [
                    {id: 1, value: '2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣', src: p1, price: '￥58.00', buys: '2889人购买'},
                    {id: 2, value: '季新款原宿bf风宽松百搭学生条纹圆领短', src: p2, price: '￥158.00', buys: '7889人购买'},
                    {id: 3, value: '2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣', src: p3, price: '￥518.00', buys: '3889人购买'},
					{id: 4, value: '2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣', src: p4, price: '￥78.00', buys: '10889人购买'},
					{id: 5, value: '2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣', src: p1, price: '￥58.00', buys: '2889人购买'},
                    {id: 6, value: '季新款原宿bf风宽松百搭学生条纹圆领短', src: p2, price: '￥158.00', buys: '7889人购买'},
                    {id: 7, value: '2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣', src: p3, price: '￥518.00', buys: '3889人购买'},
                    {id: 8, value: '2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣', src: p4, price: '￥78.00', buys: '10889人购买'}
                ]
            }
        },
        methods: {
            ...mapActions([
                'getGoodMsg'
            ]),
            go(datas) {
                this.getGoodMsg(datas)
                this.$router.push('/goods')
            }
        }
    }
</script>
