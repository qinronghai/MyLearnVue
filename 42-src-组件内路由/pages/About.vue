<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  /* beforeDestroy() {
    console.log("About组件即将倍销毁了");
  }, */
  mounted() {
    console.log("About组件挂载完毕", this);
  },

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("通过路由进入About组件之前", to, from, next);
    if (to.meta.isAuth) {
      // 是否需要鉴权
      if (localStorage.getItem("school") === "bbgu") {
        next();
      } else {
        alert("无权限查看！");
      }
    } else {
      next();
    }
  },

  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("通过路由进入About组件之后，在离开之前", to, from, next);
  },
};
</script>
