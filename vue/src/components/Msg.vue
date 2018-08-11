<template>
    <div>
        <Search/>
        <div class="mui-content">
            <div class="aui-list-cells">
                <a href="javascript:;" class="aui-list-cell aui-list-cell-s" v-for="item of content" :key="item.id">
                    <div class="aui-list-cell-fl"><img :src="item.src"></div>
                    <div class="aui-list-cell-cn" v-text="item.value"></div>
                    <div class="aui-list-cell-fr"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import p1 from '../assets/images/icon/tz-1.png'
    import p2 from '../assets/images/icon/tz-2.png'
    import p3 from '../assets/images/icon/tz-3.png'

    import Search from '@/components/Search'
    import { mapActions } from 'vuex'

    export default {
        name: 'msg',
        data() {
            return {
                content: [
                    {id: 1, value: '通知消息', src: p1},
                    {id: 2, value: '互动消息', src: p2},
                    {id: 3, value: '交易消息', src: p3}
                ]
            }
        },
        components: {
            Search
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getBoolean({
                    searchPic: 'mui-icon-arrowleft',
                    chatbubblePic: 'mui-icon-paperplane',
                    searchContent: '消息通知'
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
    .mui-content {
        padding-top: 44px;
    }
    a {
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: #646464;
    }
    .aui-list-cell {
        padding: 10px 15px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .aui-list-cells a {
        padding: 14px 15px 14px 4px;
    }
    .aui-list-cells .aui-list-cell-s {
        padding: 15px;
    }
    .aui-list-cell:before {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
    .aui-list-cell-fl {
        width: 30px;
        height: 30px;
    }
    .aui-list-cell-fl img {
        width: 100%;
        height: 100%;
        display: block;
        border: none;
    }
    .aui-list-cell-cn {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding-left: 10px;
        font-size: 12px;
        color: #666;
    }
    .aui-list-cells .aui-list-cell-cn {
        font-size: 14px;
        color: #666;
    }
    .aui-list-cell-fr:after {
        width: 18px;
        height: 18px;
        content: " ";
        display: inline-block;
        position: relative;
        top: -8px;
        top: 50%;
        margin-top: -10px;
        right: -5px;
    }
    .aui-list-cell-fr:after {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADPUlEQVR4Xu3d3XETMRAA4NXY51fSAVBBXILTgakAXAH45TSuwHN6cTogVAAdQAc4HYQKgFf/iVly9txk7EzGiVb7Iz9mcifp80a3lleKg/IiEXAkrZRGoEATBUGBLtBEAkTNJI/oxWJxsV6vL6uqup1Op3+IxsWumeTQIYSfADAEgGVVVVdWsZNCt9H8uxNey+12+242m92xC7nEHUoKjX1vmubGOfe+Mw6cPq7qul4mHhur2yeHLtj37zcJdMEmhLaOTRbR+wnT6pxNDm01srNAt9ifnHMLK9lINmgEDiF8AIDPXewY48R7/41VbvYCnckKfQIbfzyp6/rmBcbH5hbZoa1gs4C2gM0GWjs2K2jN2OygtWKzhG7z7DEA4Mrfq07qIDYbYQvdRvYwxvijix1jvPbeT9nkbU/sCGvoU9gY6XVdT544Rha/xh5aC7YIaA3YYqClY4uClowtDloqtkjoPTYA4HLq605awTYbEQuNuFg3slqtMM++7GCzLNQRDS0JWzy0FGwV0BKw1UBzx1YFzRlbHTRXbJXQHLHVQu/zai4laOqh229rstdom4DmgG0GOje2Keic2Oagj2HHGO+8929TfrloEjqEgBWsWMn6/xVjvPXe4xa9ZC9z0EeQ/zrnRql3iZmCzoWMfyZmoHMim4HOjaweut0i/RUARp0HH8mc/PCpqnbqaJG/txv+D9nFbrcb59iLrhL6FPJgMBjlOl1BHTRHZHVzNFdkVdCckdVAc0dWAS0BWTz0fD5/0+v1ME8+LAjhAlHO7OLUqpTYrCOEgLiYJ190Pox88d4fVuWSLcWdcWOR0NKQRU4dEpHFQUtFFgUtGVkMtHRkEdAakNlDa0FmDd2et4SHWx3yZMlHALHMo48caoVBIfZkA5YRrRGZHbRWZFbQmpHZQGtHZgFtATk7tBXkrNAhhI8AcJ27sOWMpeWzLsmSR3Mo0TpL6xkXkUNbRCafOqwik0JbRiaDto5MAl2Q75+gSR+GR/6F0y8AGKfeL/KM5CDZpUmhsddN0yzxzCOuhS3JZB/cODk0RvVmsxn2+/1lrtpkKszH2kkOzWGQHPpQoInehQJdoIkEiJopEU0E/Q8asnd5D6rzKwAAAABJRU5ErkJggg==');			background-position: center;
        background-repeat: no-repeat;
        background-size: 18px;
    }
</style>
