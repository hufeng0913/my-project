<template>
    <nav class="mui-bar mui-bar-tab">
        <div class="t-line aui-on-cell">
            <div class="aui-ons">
                <a v-for="item of content" :key="item.id"><span :class="item.class" @click="dos(item.id)"></span><i v-text="item.data"></i></a>
            </div>
            <div class="aui-onc">
                <a class="aui-a" v-for="item of datas" :key="item.id" v-text="item.data" @click="dos(item.id)"></a>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'goods-do',
        data() {
            return {
                content:[
                    {id:1, class:'mui-icon-extra mui-icon-extra-addpeople', data:'客服'},
                    {id:2, class:'mui-icon-extra mui-icon-extra-university', data:'店铺'},
                    {id:3, class:'mui-icon-extra mui-icon-extra-heart-filled', data:'收藏'},
                ],
                datas:[
                    {id:4, class:'aui-a', data:'加入购物车'},
                    {id:5, class:'aui-got', data:'立即购买'}
                ]
            }
        },
        methods: {
            ...mapActions([
                'collection', 'collectionDatas', 'catDatas'
            ]),
            dos(id) {
                switch(id) {
                    case 3
                    : this.collection();
                      this.collectionDatas();
                    break;
                    case 4
                    : this.catDatas()
                    break;
                    case 5
                    : this.$router.push('/shoppingCart')
                    break;
                }
            }
        }
    }
</script>

<style scoped>
    .aui-a{
        margin-right:-4px
    }
</style>

