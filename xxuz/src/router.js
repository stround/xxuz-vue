import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home.vue'
import Index from './components/home/index.vue'
import Login from './components/home/login.vue'
import Register from './components/home/register.vue'
import Shortrent from './components/home/shortrent.vue'
import Product from './components/home/product.vue'
import Detail from './components/home/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home,children:[
      {path: '', component: Index},
      {path: '/shortrent', component: Shortrent},
      {path: '/product/:kwords?', component: Product},
      {path: '/detail/:lid', component: Detail},
    ]
    },
    {path: '/login', component: Login},
    {path: '/register', component: Register},
  ]
})
