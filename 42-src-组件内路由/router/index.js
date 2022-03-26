// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'


// 创建一个路由器
const router = new VueRouter({
  routes: [ // 注意不是routers 而是routes
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: { isAuth: true,title: '关于' }

    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        {
          name: 'xinwen',
          path: 'news',  // 多级路由下的路径vue会自动生成，不要再加“/”
          component: News,
          meta: { isAuth: true, title: '新闻' },
          /* beforeEnter: (to, from, next) => {
            console.log('新闻独享路由守卫', to, from, next);
            if (to.meta.isAuth) { // 是否需要鉴权
              if (localStorage.getItem('school') === 'bbgu') {
                next();
              } else {
                alert('无权限查看！');
              }
            } else {
              next();
            }
          } */
        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              name: 'xiangqing',
              path: 'detail',  // 占位符，表明这是参数
              component: Detail,
              meta: { isAuth: true, title: '详情' },
              props($route) {
                return { id: $route.query.id, title: $route.query.title };
              }
            }
          ]
        }
      ]
    },
  ]
})

// 暴露之前先商量商量，加一个路由守卫
// 全局前置路由守卫----初始化的时候被调用、每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
  console.log('前置路由守卫', to, from, next);
  // next();  // *
  if (to.meta.isAuth) { // 是否需要鉴权
    if (localStorage.getItem('school') === 'bbgu') {
      next();
    } else {
      alert('无权限查看！');
    }
  } else {
    next();
  }
}) */

// 全局前置路由守卫----初始化的时候被调用、每次路由切换之后被调用
/* router.afterEach((to, from) => {
  console.log('后置路由守卫', to, from);
  document.title = to.meta.title || '北部湾大学';
}) */

export default router;