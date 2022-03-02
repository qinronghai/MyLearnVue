<template>
  <div>
    <Student name='昂劳务' sex='男' :age='18'></Student>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'

export default {
  name: 'CpApp',
  components: {
    Student
  },
  
}
</script>

<style>

</style>