import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './global.less'
import './assets/iconfont/iconfont.css'

import  FastClick  from  'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) { //拦截后设置标题
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

