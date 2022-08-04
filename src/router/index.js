import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from '@/views/IndexView.vue'
import CodeEditorView from '@/views/CodeEditorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
    meta: {
      title: 'Home sweet Home'
    }
  },
  {
    path: '/code',
    name: 'kite-coder',
    component: CodeEditorView,
    meta: {
      title: 'Kite Coder'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
