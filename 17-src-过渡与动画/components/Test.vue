<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow" class="come">你好啊！</h1>
    </transition>
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
/* 用动画和关键桢实现 */
h1 {
  background-color: orange;
}
.hello-enter-active {
  animation: demo 1s;
}

.hello-leave-active {
  animation-name: demo;
  animation-duration: 1s;
  animation-direction: reverse;
}
@keyframes demo {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>