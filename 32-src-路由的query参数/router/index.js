// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'


// 创建并暴露一个路由器
export default new VueRouter({
  routes: [ // 注意不是routers 而是routes
    {
      path: '/about',
      component: About,

    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',  // 多级路由下的路径vue会自动生成，不要再加“/”
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail',
              component: Detail,
            }
          ]
        }
      ]
    },
  ]
})