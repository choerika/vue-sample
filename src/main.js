import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ComponentA from './views/ComponentA.vue'
import ComponentB from './views/ComponentB.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: ComponentA},
  {path: '/home', component: ComponentA},
  {path: '/about', component: ComponentB}
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
