import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDo from '@/components/ToDo'
import SignUp from '@/components/SignUp'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todos',
      component: ToDo
    },
    {
      path:'/signup',
      component:SignUp
    }
  ]
})
