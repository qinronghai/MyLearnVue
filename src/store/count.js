// 求和相关的配置
export default {
  namespaced: true,
  actions: {
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
  },
  mutations: {
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
  },
  state: {
    sum: 0, // 当前的和
    school: '北部湾大学',
    subject: '前端',
  },
  getters: {
    bigSum(states) {
      return states.sum * 10;
    }
  },
}