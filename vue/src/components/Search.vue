<template>
    <div>
        <header class="mui-bar mui-bar-nav aui-header b-line">
            <router-link :class="['mui-icon', 'mui-pull-left', searchPic]" :to= href></router-link>
            <h1 class="mui-title" v-text="searchContent"></h1>
            <router-link :class="['mui-icon', 'mui-pull-right', chatbubblePic]" to="/msg"></router-link>
        </header>
    </div>
</template>

<script>
    import {mapGetters } from 'vuex' 

    export default {
        name: 'index-search',
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'searchPic',
                'chatbubblePic',
                'searchContent',
                'href'
            ])
        }
    }
</script>
