<template>
    <div class="mui-ios mui-ios-11 mui-ios-11-0">
        <Search/>
        <ClassificationClass/>
        <IndexArea/>
        <Like/>
        <div style="height:50px;"></div>
        <NavBar/>
    </div>
</template>

<script>
    const Search = ()=> import(/* webpackChunkName: "group-search" */ '@/components/Search')
    const ClassificationClass = ()=> import(/* webpackChunkName: "group-classification" */ '@/components/Classification-Class')
    const IndexArea = ()=> import(/* webpackChunkName: "group-index" */ '@/components/Index-Area')
    const Like = ()=> import(/* webpackChunkName: "like" */ '@/components/Like')
    const NavBar = ()=> import(/* webpackChunkName: "navBar" */ '@/components/Nav')

    import {mapActions} from 'vuex'

    export default {
        name: 'classification',
        components: {
            Search,ClassificationClass,IndexArea,Like,NavBar
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getBoolean({
                    searchPic: 'mui-icon-search',
                    chatbubblePic: 'mui-icon-chatbubble',
                    searchContent: '分类'
                })
                vm.changeHref('/search')
                vm.changeCount(1)
            })
        },
        methods: {
            ...mapActions([
                'getBoolean', 'changeHref', 'changeCount'
            ])
        }
    }
</script>
