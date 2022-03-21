<template>
  <div class="container">
    <Category title="食品">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="https://qinronghai.github.io">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a slot="footer" href="https://qinronghai.github.io">单机游戏</a>
        <a slot="footer" href="https://qinronghai.github.io">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template slot="footer">
        <div class="foot">
          <a href="https://qinronghai.github.io">经典</a>
          <a href="https://qinronghai.github.io">热门</a>
          <a href="https://qinronghai.github.io">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
.container,
.foot {
  display: flex;
  /* 均匀排列每个元素，每个元素周围分配相同的空间 */
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>