<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot name="center">我是一些默认值，当使用者没有传入东西时，我会出现。</slot>
    <slot name="footer">我是一些默认值，当使用者没有传入东西时，我会出现。</slot>
    <!-- <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul> -->
    <!-- <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" /> -->
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: yellow;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>