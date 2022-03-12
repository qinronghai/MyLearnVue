<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentNameToSchool">发送学生姓名给学校</button>
  </div>
</template> 

<script>
import pubsub from "pubsub-js";
export default {
  name: "CpStudent",
  data() {
    return {
      name: "大卫",
      sex: "男",
    };
  },
  methods: {
    sendStudentNameToSchool() {
      // this.$bus.$emit("msgName", this.name);
      pubsub.publish('hello',666);
    },
  },
  mounted() {
    console.log("Student", this.x);
  },
};
</script>

<style>
.student {
  background-color: blue;
}
</style>
