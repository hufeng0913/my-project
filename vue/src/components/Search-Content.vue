<template>
    <div class="mui-content" style="padding:15px">
		<div class="mui-input-row mui-search">
			<input type="search" class="mui-input-clear" placeholder="">
			<a  class="mui-action-back mui-icon mui-pull-right" style="position:absolute; right:10px; z-index:9999; font-size:14px; color:#999; top:12px" @click="cancel" v-text="buttonName"></a>
		</div>
        <div class="mui-content-padded">
            <h5 v-text="titel"></h5>
            <span :class="item.class" v-for="item of content" :key="item.id" v-text="item.data"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                titel: '热门搜索',
                buttonName: '取消',
                content: [
                    {id: 1, data:'牛仔裤', class:'mui-badge'},
                    {id: 2, data:'上衣', class:'mui-badge mui-badge-primary'},
                    {id: 3, data:'裙子', class:'mui-badge mui-badge-success'},
                    {id: 4, data:'亲子套装', class:'mui-badge mui-badge-warning'},
                    {id: 5, data:'省心套组', class:'mui-badge mui-badge-danger'},
                    {id: 6, data:'针织衫', class:'mui-badge mui-badge-purple'}
                ]
            }
        },
        methods: {
            cancel() {
                this.$router.push('home')
            }
        }
    }
</script>
