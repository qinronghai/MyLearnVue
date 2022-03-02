<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch"></School>
    <School id="sch"></School>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'

export default {
  name: 'CpApp',
  components: {
    School
  },
  data() {
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods: {
    showDOM(){
      console.log(this.$refs.title);
      console.log(this.$refs.btn);
      console.log(this.$refs.sch); // 获取到的是School组件的实例对象（vc）
      console.log(document.getElementById('sch')); // 获取到的是School组件的HTML结构
    }
  }
}
</script>

<style>

</style>