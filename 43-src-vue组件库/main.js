// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
Vue.config.productionTip = false;

/* 完整引入 
// 引入Element UI
// import ElementUI from 'element-ui';
// 引入Element UI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
 */

// 按需引入
import { Button,Row,DatePicker } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);


// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 应用Element UI
// Vue.use(ElementUI);
// 创建vm
const vm = new Vue({
  el: '#app',
  render: h => h(App),
})