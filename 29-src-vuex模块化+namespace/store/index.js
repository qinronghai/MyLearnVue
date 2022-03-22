// 该文件用于创建Vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 应用Vuex插件，必须在创建store实例对象之前应用，否则报错
Vue.use(Vuex);





// 创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions
  }
})