<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "CpApp",
  data() {
    return {
      msg: "hello",
    };
  },
  components: {
    Student,
    School,
  },
};
</script>

<style>
.app {
  background-color: #666;
  padding: 5px;
}
</style>