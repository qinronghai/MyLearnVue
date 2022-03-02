<template>
  <div class="demo2">
    <h2 class="qwe" @click="showName">学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template> 

<script>

export default {
  name: 'CpSchool',
  data() {
    return {
      name: 'bbgc',
      address: '北京'
    }
  },
}
</script>

<style scoped lang='less'>
  .demo2 {
    background-color: orange;
    .qwe {
      font-size: 40px;
    }
  }
</style>
