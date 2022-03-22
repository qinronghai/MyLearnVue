// 该文件用于创建Vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件，必须在创建store实例对象之前应用，否则报错
Vue.use(Vuex);

// 服务员 有要求尽管提 即业务逻辑尽管写在这 
// 准备actions--用于响应组件中的动作 
const actions = {
  // jia(context, value) {
  //   console.log('actions中的jia被调用了');
  //   context.commit('JIA', value);
  // },
  // jian(context, value) {
  //   console.log('actions中的jia被调用了');
  //   context.commit('JIAN', value);
  // },
  jiaOdd(context, value) {
    console.log('actions中的jia被调用了');
    if (context.state.sum % 2) { // 业务逻辑和请求在这里写
      context.commit('JIAODD', value);
    }
  },
  jiaWait(context, value) {
    console.log('actions中的jia被调用了');
    setTimeout(() => {
      context.commit('JIAWAIT', value);
    }, 500);
  },
}
// 后厨 只做饭
// 准备mutations--用于操作数据（state） ，在mutations中不要在写任何的业务逻辑了
const mutations = {
  JIA(state, value) {
    console.log('mutations中的JIA被调用了');
    state.sum += value;
  },
  JIAN(state, value) {
    console.log('mutations中的JIAN被调用了');
    state.sum -= value;
  },
  JIAODD(state, value) {
    console.log('mutations中的JIAN被调用了');
    state.sum += value;
  },
  JIAWAIT(state, value) {
    console.log('mutations中的JIAN被调用了');
    state.sum += value;
  },
}
// 准备state--用于存储数据
const state = {
  sum: 0, // 当前的和
  school: '北部湾大学',
  subject: '前端'
}
const getters = {
  bigSum() {
    return state.sum * 10;
  }
}
// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})