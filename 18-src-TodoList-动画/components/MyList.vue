<template>
  <ul class="todo-main">
    <transition-group name="todo" appear="">
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"
        >todoObj.title</MyItem
      >
    </transition-group>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyItem,
  },
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todo-enter-active {
  animation: demo 1s;
}

.todo-leave-active {
  animation-name: demo;
  animation-duration: 1s;
  animation-direction: reverse;
}
@keyframes demo {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>