import Vue from 'vue'
import Router from 'vue-router'

const home = ()=> import(/* webpackChunkName: "group-route" */ '@/components/Index')
const Classification = ()=> import(/* webpackChunkName: "group-route" */ '@/components/Classification')
const Mine = ()=> import(/* webpackChunkName: "group-route" */ '@/components/Mine')
const ShoppingCart = ()=> import(/* webpackChunkName: "group-route" */ '@/components/ShoppingCart')
const Search = ()=> import(/* webpackChunkName: "group-route" */ '@/components/Search-Content')
const Msg = ()=> import(/* webpackChunkName: "group-route" */ '@/components/Msg')
const LogIn = ()=> import(/* webpackChunkName: "group-route" */ '@/components/LogIn')
const Register = ()=> import(/* webpackChunkName: "group-route" */ '@/components/Register')
const Goods = ()=> import(/* webpackChunkName: "group-route" */ '@/components/Goods')
const Collection = ()=> import(/* webpackChunkName: "group-route" */ '@/components/Collection')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/home',
      name: 'home',
      component: home
    },
    {
      path:'/classification',
      name: 'classification',
      component: Classification
    },
    {
      path:'/mine',
      name: 'mine',
      component: Mine
    },
    {
      path:'/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path:'/search',
      name: 'search',
      component: Search
    },
    {
      path:'/msg',
      name: 'msg',
      component: Msg
    },
    {
      path:'/login',
      name: 'login',
      component: LogIn
    },
    {
      path:'/register',
      name: 'register',
      component: Register
    },
    {
      path:'/goods',
      name: 'goods',
      component: Goods
    },
    {
      path:'/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path:'/home',
      redirect: {name: 'home'}
    },
    {
      path:'/',
      redirect: {name: 'home'}
    }
  ]
})
