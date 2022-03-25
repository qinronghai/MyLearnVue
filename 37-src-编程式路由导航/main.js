// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
Vue.config.productionTip = false;
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 应用VueRouter插件
Vue.use(VueRouter);


// 创建vm
const vm = new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})