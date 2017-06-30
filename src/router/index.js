import Vue from 'vue'
import Router from 'vue-router'
import Dash from '@/components/Dash'
import Dashboard from '@/components/Dashboard'
import MenuOne from '@/components/MenuOne'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dash',
      component: Dash,
      children: [
        {
          path: '',
          component: Dashboard,
          name: 'Dashboard'
        },
        {
          path: '/menu-one',
          component: MenuOne,
          name: 'MenuOne'
        }
      ]
    }
  ]
})
