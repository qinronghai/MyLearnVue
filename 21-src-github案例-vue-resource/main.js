// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 使用插件
Vue.use(vueResource) // vm和所有的vc身上都多了$http
// Vue.prototype.x = { a: 1, b: 2 };



// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  },
})