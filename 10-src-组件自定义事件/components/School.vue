<template>
  <div class="school">
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名字发送给APP</button>
  </div>
</template> 

<script>
export default {
  name: "CpSchool",
  data() {
    return {
      name: "bbgc",
      address: "北京",
    };
  },
  props: ["getSchoolName"],
  methods: {
    sendSchoolName() {
      console.log("发送了学校名字");
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped lang='less'>
.school {
  background-color: orange;
}
</style>
