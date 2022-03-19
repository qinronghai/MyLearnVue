<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">大帅哥！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "CpTest",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
/* 用过渡实现 */
h1 {
  background-color: orange;

  /* 哪个元素过渡变化，就在哪个元素上加入过渡效果的持续时间。 */
  /* transition-duration: 1s;  一般在v-enter-active/leave {}：元素进入的激活效果中写入该元素的过渡属性   */
}
/* Vue在元素来和离开的过程中分别都有3种不同的样式 */

/* 进入的起点 */
.hello-enter {
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to {
  transform: translateX(0);
}
.hello-enter-active,
.hello-leave-active {
  transition-duration: 1s;
}
/* 离开的起点 */
.hello-leave {
  transform: translateX(0);
}
/* 离开的终点 */
.hello-leave-to {
  transform: translateX(-100%);
}
</style>