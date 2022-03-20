<template>
  <div class="row">
    <!-- 展示卡片 -->
    <div class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 欢迎词 -->
    <h1 v-show="info.isFirst">欢迎你</h1>
    <!-- 加载中 -->
    <h1 v-show="info.isLoading">加载中</h1>
    <!-- 错误信息 -->
    <h1>{{ info.errorMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "CpList",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updateInfoData", (infoObj) => {
      console.log("List收到了user数据", infoObj);
      this.info = {...this.info,...infoObj};
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>