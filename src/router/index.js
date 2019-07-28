import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import EleUI from '@/components/EleUI'

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
  ],
  mode:'history'
})
