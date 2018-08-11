<template>
    <div class="">
		<div style="padding:0 10px; margin-top:10px" class="">
			<div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
				<a :class="item.class" v-for="item of list" :key="item.id" v-text="item.value"></a>
			</div>
		</div>
		<div>
			<div id="item1" class="mui-control-content mui-active" style="height:1200px">
				<div class="aui-p">
					<p v-text="title"></p>
				</div>
				<div class="aui-kill aui-op" v-for="item of picture" :key="item.id"><img :src="item.src" alt=""></div>
			</div>
		</div>
	</div>
</template>

<script>
    import p1 from '@/assets/images/bd1.jpg'
    import p2 from '@/assets/images/bd2.jpg'
    import p3 from '@/assets/images/bd3.jpg'
	import p4 from '@/assets/images/bd4.jpg'
	import p5 from '@/assets/images/bd5.jpg'
    import p6 from '@/assets/images/bd6.jpg'
    import p7 from '@/assets/images/ad1.jpg'
	import p8 from '@/assets/images/ad2.jpg'
	import p9 from '@/assets/images/ad3.jpg'
    import p10 from '@/assets/images/ad4.jpg'
	
    export default {
        name: 'goods-introduction',
        data() {
            return {
				title: '春夏季新款破洞高腰牛仔裤女哈女哈伦铅笔春夏款破洞高腰牛仔裤女哈伦铅笔宽松九分女裤宽松九分女松九分女裤宽裤 S25',
				list: [
					{id:1, value: '商品详情', class:"mui-control-item mui-active"},
					{id:2, value: '规格尺码', class:"mui-control-item"},
					{id:3, value: '商品评价', class:"mui-control-item"}
				],
                picture: [
					{id:4, src:p1},
					{id:5, src:p2},
					{id:6, src:p3},
					{id:7, src:p4},
					{id:8, src:p5},
					{id:9, src:p6},
					{id:10, src:p7},
					{id:11, src:p8},
					{id:12, src:p9},
					{id:13, src:p10}
                ]
            }
        }
    }
</script>