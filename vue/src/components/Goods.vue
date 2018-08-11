<template>
    <div>
        <GoodsMsg/>
        <IndexArea/>
        <GoodsIntroduction/>
        <GoodsDo/>
    </div>
</template>

<script>
    const GoodsMsg = ()=> import(/* webpackChunkName: "group-goods" */ '@/components/Goods-Msg')
    const IndexArea = ()=> import(/* webpackChunkName: "group-goods" */ '@/components/Index-Area')
    const GoodsIntroduction = ()=> import(/* webpackChunkName: "group-goods" */ '@/components/Goods-Introduction')
    const GoodsDo = ()=> import(/* webpackChunkName: "group-goods" */ '@/components/Goods-Do')

    export default {
        name: 'goods',
        components: {
            GoodsMsg, IndexArea, GoodsIntroduction, GoodsDo
        }
    }
</script>
