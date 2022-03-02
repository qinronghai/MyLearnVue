<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <!-- <button @click="showName">点我提示学校名信息</button> -->
  </div>
</template>

<script>
export default {
  name: 'CpSchool',
  data() {
    return {
      name: "bbgu",
      address: "钦州",
    }
  },
}
</script>

<style>
  .school{
    background-color: red;
  }
</style>