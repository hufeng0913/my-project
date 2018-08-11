import p1 from '../images/d_sp_01.jpg'
export default {
    isFetching:false,
    userToEvaluate:true,
    activeNum:0,
    navDatas:{
        activeNum: 0,
        show:true,
        datas: [
            {id:1, content:"首页", to:"/home", class:"icon icon-f1"},
            {id:2, content:"社区", to:"/community", class:"icon icon-f2"},
            {id:3, content:"购物车", to:"/shoppingCart", class:"icon icon-f3"},
            {id:4, content:"我", to:"/mine", class:"icon icon-f4"}
        ]
    },
    userData:{
        username:"", 
        password:"",
        rePassword:""
    },
    goodDetail:{id:1, pic:p1, content:'收款海绵包包', to:"/productDetails", price:"￥68.00", p:"$175.00", count:0, checked:1},
    catDatas:[],
    totalPrice:0,
    goodsNum:0
}