export default {
  proxy: {
    '/apiTest': { //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
      target: 'http://kydev.qianlan.cn/api',
      changeOrigin: true, //是否跨域
      rewrite: (path) => path.replace('/apiTest', '') //重写匹配的字段，如果不需要放在请求路径上，可以重写为""
    }
  }
}