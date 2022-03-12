<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名字发送给APP</button>
    <button @click="unbind">解绑selfSet事件</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template> 

<script>
export default {
  name: "CpStudent",
  data() {
    return {
      name: "大卫",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      console.log(this.name);
      // 触发student组件实例身上得selfSet事件
      this.$emit("selfSet", this.name, 666, 888, 900);
      this.$emit("demo");
    },
    unbind() {
      // 解绑selfSet事件  只适用于解绑一个自定义事件
      this.$off('selfSet');
      // 解绑多个事件
      this.$off(['selfSet','demo']);
      // 解绑所有都自定义事件
      this.$off();

    },
    death(){
      this.$destroy(); // 销毁当前Student组件的实例,销毁后所有Student实例的自定义事件全都不奏效了
    }
  },
};
</script>

<style>
.student {
  background-color: blue;
}
</style>
