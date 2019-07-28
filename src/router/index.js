import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import EleUI from '@/components/EleUI'
import Table from '@/components/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/eleui',
      name: 'EleUI',
      component: EleUI
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
  ],
  mode:'history'
})
