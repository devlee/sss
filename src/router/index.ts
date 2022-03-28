import * as VueRouter from "vue-router";
import p1 from '../pages/p1/index.vue'
import p2 from '../pages/p2/index.vue'

const routes = [
  { path: '/', component: p1 },
  { path: '/xx', component: p2 },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router
