<template>
    <div>
        <Search/>
        <IndexBanner/>
        <IndexClass/>
        <IndexArea/>
        <IndexBright/>
        <IndexArea/>
        <IndexBannerNum/>
        <Like/>
        <div style="height:50px;"></div>
        <NavBar/>
    </div>
</template>

<script>
    const Search = ()=> import(/* webpackChunkName: "group-search" */ '@/components/Search')
    const IndexBanner = ()=> import(/* webpackChunkName: "group-index" */ '@/components/Index-Banner')
    const IndexClass = ()=> import(/* webpackChunkName: "group-index" */ '@/components/Index-Class')
    const IndexBright = ()=> import(/* webpackChunkName: "group-index" */ '@/components/Index-Bright')
    const IndexArea = ()=> import(/* webpackChunkName: "group-index" */ '@/components/Index-Area')
    const IndexBannerNum = ()=> import(/* webpackChunkName: "group-index" */ '@/components/Index-BannerNum')
    const Like = ()=> import(/* webpackChunkName: "like" */ '@/components/Like')
    const NavBar = ()=> import(/* webpackChunkName: "navBar" */ '@/components/Nav')

    import { mapActions } from 'vuex'

    export default {
        name: 'index',
        components: {
            Search,
            IndexBanner,
            IndexClass,
            IndexBright,
            IndexArea,
            IndexBannerNum,
            Like,
            NavBar
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getBoolean({
                    searchPic: 'mui-icon-search',
                    chatbubblePic: 'mui-icon-chatbubble',
                    searchContent: '海淘购'
                })
                vm.changeHref('/search')
                vm.changeCount(0)
            })
        },
        methods: {
            ...mapActions([
                'getBoolean', 'changeHref', 'changeCount'
            ])
        }
    }
</script>
