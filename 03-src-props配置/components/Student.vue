<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ this.ageFlag }}</h2>
    <button @click="updateAge">点我修改年龄</button>
  </div>
</template> 

<script>
export default {
  name: 'CpStudent',
  data() {
    return {
      msg:'我是谁？',
      ageFlag: this.age
    }
  },
  methods: {
    updateAge(){
      this.ageFlag++;
    }
  },
  // props: ['name','sex','age'] // 简单接收

  // 接收的同时对数据进行类型限制
  /* props: {
    name: String,
    age: Number, 
    sex: String
  } */  

  // 接收的同时对数据进行:类型限制+默认值的指定+必要的限制
  props: {
    name: {
      type: String,
      require: true // name是必要的
    },
    age: {
      type: Number,
      default: 99 // 默认值
    },
    sex: {
      type: String,
      require: true
    }
  }
}
</script>

