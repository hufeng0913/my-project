<template>
    <div class="aui-hot t-line">
		<h2 v-text="title"></h2>
		<div>
			<a href="javascript:;"><img :src="src" alt=""></a>
		</div>
	</div>
</template>

<script>
	import p1 from '@/assets/images/hot.jpg'

    export default {
			name: 'index-bright',
			data() {
				return {
					title: '牛仔蓝不单调不低调',
					src: p1
				}
			}
    }
</script>
