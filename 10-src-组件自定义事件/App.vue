<template>
  <div class="app">
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <hr />
    <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第一种写法,使用@或v-on) -->
    <Student v-on:selfSet="getStudentName" @demo="m1"></Student>

    <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第二种写法,使用ref) -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "CpApp",
  components: {
    Student,
    School,
  },
  methods: {
    getSchoolName(schoolName) {
      console.log("App收到了学校名", schoolName);
    },
    getStudentName(studentName, ...params) {
      console.log("App收到了学生名", studentName, params);
    },
    m1(){
      console.log("demo事件被触发了！");
    }
  },
  mounted() {
    this.$refs.student.$on("selfSet", this.getStudentName); // 绑定自定义事件
    // this.$refs.student.once("selfSet", this.getStudentName); // 绑定自定义事件(一次性)
  },
};
</script>

<style>
.app {
  background-color: #666;
  padding: 5px;
}
</style>