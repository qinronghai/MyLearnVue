<template>
  <div>
    <Student></Student>
    <hr>
    <School></School>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'CpApp',
  components: {
    Student,
    School
  },
  
}
</script>

<style>

</style>