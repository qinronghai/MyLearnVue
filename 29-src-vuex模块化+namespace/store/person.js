import axios from "axios";
import { nanoid } from "nanoid";

// 人员相关的配置
export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      console.log("actions中的addPersonWang被调用了");
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value);
      } else {
        alert("添加的人必须姓王");
      }
    },
    addPersonServer(context) {
      axios.get('https://randomuser.me/api/ ').then((response) => {
        console.log("请求成功了", response.data);
        const name = response.data.results[0].name.last
        context.commit('ADD_PERSON', { id: nanoid(), name })
      },
        (error) => {
          console.log("请求失败了", error.message);
        })
    }

  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log('mutations中的ADD_PERSON被调用了');
      state.personList.unshift(value);
    }
  },
  state: {
    personList: [
      {
        id: '001',
        name: '张三'
      }
    ]
  },
  getters: {
    firsPersonName(state) {
      return state.personList[0].name;
    }
  },
}