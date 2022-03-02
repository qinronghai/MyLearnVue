<template>
  <div>
    <img src="./assets/logo.png" alt="" srcset="">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  components: {
    School,
    Student
  }
}
</script>
