<template>
    <div class="mui-content">
        <div class="aui-img-clear" style="padding-top:15px">
            <div class="title mui-input-row mui-checkbox mui-left b-line"><input name="checkbox" value="Item 1" type="checkbox" checked="" v-show="catList.length > 0"><em class="ss-aui">海淘购</em></div>
            <ul class="mui-table-view mui-table-view" id="OA_task_1">
                <li class="mui-table-view-cell mui-media b-line" v-for="item of catList" :key="item.key">
                    <div class=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox"></div>
                    <div class="mui-slider-right mui-disabled">
                        <a class="mui-btn mui-btn-red" v-text="dos"></a>
                    </div>
                    <div class="mui-slider-handle mui-table">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" :src="item.src">
                            <div class="mui-media-body">
                                <span v-text="item.price"></span>
                                <p class="mui-ellipsis" v-text="item.content"></p>
                                <p v-text="style"></p>
                                <p><span>数量：</span><span @click="reduce(item.key)">-</span><span v-text="item.count" style="padding-right: 5px; padding-left: 5px;"></span><span @click="add(item.key)">+</span></p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
        name: 'shoppingCart-cart',
        data() {
            return {
                title: '海淘购',
                dos:'删除',
                style:'颜色：黑色  尺码：35'
            }
        },
        computed: {
            ...mapGetters(['catList'])
        },
        methods: {
            ...mapActions(['add', 'reduce'])
        }
    }
</script>

<style scoped>
    .mui-content {
        padding-top: 44px;
    }
    .inpt{
        width: 10%;
        height: 40px;
        margin-bottom: 15px;
    }
</style>
