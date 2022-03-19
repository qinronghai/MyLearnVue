const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, // 关闭语法检查
  // 开启代理服务器 (方式一)
  /* devServer: {
    proxy: 'http://localhost:5000'
  } ,*/
  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      /* 
      1. /api 请求前缀 
          想走代理，就加上api；不想走代理，就不加。
      2. pathRewrite 路径重写（*）使用正则表达式，如果没有这个，那么请求5000服务器的路径则包含了/api/student，
          然而5000这台服务器根本就没有/api/student路径下的文件，所以会返回404（未发现）。
      3. ws: 是用于支持websocket
     */
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' }, // 匹配所有/api，替换成空字符串。  ^ 符号表示只匹配那些以once开头的字符串。
        // ws: true,  // 默认是true
        // changeOrigin: true  // 默认是true，用于控制请求头中的host值，欺骗5000服务器我这个代理服务器也是来自5000的。
      },
      // 上面的精简版
      /*  '/foo': {
          target: '<other_url>'
       } */
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' }, // 匹配所有/api，替换成空字符串。  ^ 符号表示只匹配那些以once开头的字符串。
        // ws: true,  // 默认是true
        // changeOrigin: true  // 默认是true，用于控制请求头中的host值，欺骗5000服务器我这个代理服务器也是来自5000的。
      },
    }
  }
})
