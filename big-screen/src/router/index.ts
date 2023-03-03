/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory 这个就是vue2中路由的模式，
 *                      这里的是hash模式，这个还可以是createWebHistory等
 * 
 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型
 */
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'big-screen',
    component: () => import("@/views/Screen/index.vue"),
    alias: '/todolist',
    meta: {
      title: '大屏页面'
    }
  },
  {
    path: '/page',
    name: '',
    component: () => import("@/views/Second/index.vue"),
    meta: {
      title: '二级页面详情'
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  next();
  // if (to.name !== 'big-screen' && !isAuthenticated){
  //   next({ name: 'big-screen' })
  // } else{
  //   next()
  // }
})
export default router;
