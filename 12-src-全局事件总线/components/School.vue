<template>
  <div class="school">
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template> 

<script>
export default {
  name: "CpSchool",
  data() {
    return {
      name: "bbgc",
      address: "北京",
    };
  },
  mounted() {
    // console.log("School", this.x);
    this.$bus.$on("sendName", (data) => {
      console.log("我是School组件，收到了数据", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off('sendName');  // 在vc组件实例对象销毁之前解绑在总线的自定义事件，否则其一直存在。一定要在（）内指定解绑的自定义事件对象
    
  },
};
</script>

<style scoped lang='less'>
.school {
  background-color: orange;
  padding: 5px;
}
</style>
