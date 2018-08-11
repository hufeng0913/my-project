<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
            <div class="t-line">
                <router-link :to=item.href class="aui-tab-item" v-for="(item, index) of content" :key="item.id" :class="count === index ? 'mui-active' : ''">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label" v-text="item.value"></span>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'Nav',
        data() {
            return {
                content: [
                    {id: 1, value: '首页', href: '/home'},
                    {id: 2, value: '分类', href: '/classification'},
                    {id: 3, value: '购物车', href: '/shoppingCart'},
                    {id: 4, value: '我的', href: '/mine'}
                ]
            }
        },
        computed: {
            ...mapGetters([
                'count'
            ])
        }
    }
</script>


