<template>
  <div class="school">
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template> 

<script>
import pubsub from "pubsub-js";
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
    /* this.$bus.$on("sendName", (data) => {
      console.log("我是School组件，收到了数据", data);
    }); */
    // 一旦挂载完毕，就去订阅一个消息
    this.pubId = pubsub.subscribe("hello", (subName, data) => {
      console.log(this);
      console.log("有人发布了hello消息，hello消息的回调执行了", subName, data);
    });
  },
  beforeDestroy() {
    // this.$bus.$off('sendName');  // 在vc组件实例对象销毁之前解绑在总线的自定义事件，否则其一直存在。一定要在（）内指定解绑的自定义事件对象
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped lang='less'>
.school {
  background-color: orange;
  padding: 5px;
}
</style>
