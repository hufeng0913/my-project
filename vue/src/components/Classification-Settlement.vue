<template>
    <nav class="mui-bar mui-bar-tab" style="bottom:50px" v-show="catList.length > 0">
        <div class="t-line aui-on-cell">
            <div class="title mui-input-row mui-checkbox mui-left" style="position:absolute; top:9px"><input name="checkbox" value="Item 1" type="checkbox" checked=""><em class="ss-aui">全选</em></div>
            <div class="aui-onc">
                <p style="display:inline-block"><span style="color:#fb4545" v-text="'合计：¥' + totalPrice"></span>不含运费</p>
                <a href="#" class="aui-got">去结算</a>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'classification-settlement',
        computed: {
            ...mapGetters(['catList', 'totalPrice'])
        }
    }
</script>
