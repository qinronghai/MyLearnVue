<template>
  <div class="container">
    <Category title="食品">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["小龙虾", "牛肉", "青菜", "火锅"],
      games: ["红色警戒", "穿越火线", "qq飞车", "LOL"],
      moves: ["《教父》", "《拆弹专家》", "《叶问》", "《格斗士》"],
    };
  },
};
</script>

<style >
.container {
  display: flex;
  /* 均匀排列每个元素，每个元素周围分配相同的空间 */
  justify-content: space-around;
}
</style>