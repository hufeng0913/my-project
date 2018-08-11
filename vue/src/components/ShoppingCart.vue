<template>
    <div>
        <Search/>
        <Cart/>
        <NavBar/>
        <IndexArea/>
        <Like/>
        <div style="height:95px;"></div>
        <Classification/>
    </div>
</template>

<script>
    const Search = ()=> import(/* webpackChunkName: "group-search" */ '@/components/Search')
    const NavBar = ()=> import(/* webpackChunkName: "navBar" */ '@/components/Nav')
    const Cart = ()=> import(/* webpackChunkName: "navBar" */ '@/components/ShoppingCart-Cart')
    const IndexArea = ()=> import(/* webpackChunkName: "group-index" */ '@/components/Index-Area')
    const Like = ()=> import(/* webpackChunkName: "like" */ '@/components/Like')
    const Classification = ()=> import(/* webpackChunkName: "like" */ '@/components/Classification-Settlement')
    import { mapActions } from 'vuex'

    export default {
        name: 'shoppingCart',
        components: {
            Search, Cart, NavBar, IndexArea, Like, Classification
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getBoolean({
                    searchPic: '',
                    chatbubblePic: 'mui-icon-trash',
                    searchContent: '购物车'
                })
                vm.changeCount(2)
            })
        },
        methods: {
            ...mapActions([
                'getBoolean', 'changeCount'
            ])
        }
    }
</script>