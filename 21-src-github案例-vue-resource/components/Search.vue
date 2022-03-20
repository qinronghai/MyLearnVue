<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "CpSearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // console.log(this);
      // 未发送请求 展示欢迎词，其他不展示
      this.$bus.$emit("updateInfoData", {
        isFirst: false,
        isLoading: true,
        errorMsg: "",
        users: [],
      });
      // axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        // 使用resource插件把axios请求替换
        this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // 请求成功
          console.log("请求成功了", response.data.items);
          this.$bus.$emit("updateInfoData", {
            isLoading: false,
            errorMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          // 请求失败
          this.$bus.$emit("updateInfoData", {
            isLoading: false,
            errorMsg: "error.message",
            users: [],
          });
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>
