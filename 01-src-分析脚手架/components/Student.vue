<template>
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我显示学生名字</button>
  </div>
</template>

<script>
export default {
  name: "CpStudent",
  data() {
    return {
      name: "qin",
      age: 18,
    };
  },
  methods: {
    showName(){
      alert(this.name);
    }
  },
};
</script>

<style></style>
