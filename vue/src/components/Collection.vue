<template>
    <div>
        <Search/>
        <div class="mui-pages">
            <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                <ul class="mui-table-view mui-table-view t-line" id="OA_task_1">
                    <li class="mui-table-view-cell  mui-table-view-cell mui-media b-line" v-for="item of collectionDatas" :key="item.id">
                        <div class=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox"></div>
                        <div class="mui-slider-right mui-disabled">
                            <a class="mui-btn mui-btn-red">删除</a>
                        </div>
                        <div class="mui-slider-handle mui-table">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" :src="item.src">
                                <div class="mui-media-body"><span v-text="item.price"></span>
                                    <p class="mui-ellipsis" v-text="item.titel"></p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    const Search = ()=> import(/* webpackChunkName: "group-search" */ '@/components/Search')
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'collection',
        components: {
            Search
        },
        computed: {
            ...mapGetters(['collectionDatas'])
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getBoolean({
                    searchPic: 'mui-icon-arrowleft',
                    chatbubblePic: '',
                    searchContent: '我的收藏'
                })
                vm.changeHref('/home')
            })
        },
        methods: {
            ...mapActions([
                'getBoolean', 'changeHref'
            ])
        }
    }
</script>

<style scoped>
    .mui-pages {
        position: relative;
        top: 43px;
        height: auto;
    }
</style>


