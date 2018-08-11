<template>
    <div class="mui-view">
        <Search/>
        <div class="mui-pages">
            <MineCenter/>
        </div>
        <NavBar/>
    </div>
</template>

<script>
    const Search = ()=> import(/* webpackChunkName: "group-search" */ '@/components/Search')
    const NavBar = ()=> import(/* webpackChunkName: "navBar" */ '@/components/Nav')
    const MineCenter = ()=> import(/* webpackChunkName: "group-mine" */ '@/components/Mine-Center')

    import { mapActions } from 'vuex'

    export default {
        name: 'mine',
        components: {
            Search, NavBar, MineCenter
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getBoolean({
                    searchPic: '',
                    chatbubblePic: '',
                    searchContent: '个人中心'
                })
                vm.changeCount(3)
                vm.getName(localStorage.getItem("username"))
            })
        },
        methods: {
            ...mapActions([
                'getBoolean', 'changeCount', 'getName'
            ])
        }
    }
</script>

<style scoped>
    .mui-view, .mui-pages{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    .mui-pages {
        top: 43px;
        height: auto;
    }
</style>