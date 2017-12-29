import Vue from 'vue'
import Router from 'vue-router'
import Labels from '../components/tables/Labels.vue'
import Drives from '../components/tables/Drives.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/labels'
    },
    {
      path: '/labels',
      name: 'Labels',
      component: Labels
    },
    {
      path: '/drives',
      name: 'Drives',
      component: Drives
    }
  ]
})
