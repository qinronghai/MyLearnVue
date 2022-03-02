<template>
  <div class='demo'>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  
  </div>
</template> 

<script>

export default {
  name: 'CpStudent',
  data() {
    return {
      name: '大卫',
      sex: '男'
    }
  },
}
</script>

<style>
  .demo {
    background-color: blue;
  }
</style>
