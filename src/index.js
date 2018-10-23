import Vue from 'vue';
import App from './view/app/app.vue'
import './style/index.css';
import VueRouter from 'vue-router';
import routes from './router/index'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes:routes
})
router.beforeEach((to,form,auth) => {
  auth();
})
console.log('routes',routes)
new Vue({
  el:'#app',
  router,
  render : h => h(App)
})