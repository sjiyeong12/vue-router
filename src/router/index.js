import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@/components/Home.vue"
import Join from "@/components/Join.vue"
import Login from "@/components/Login.vue"
import About from "@/components/About.vue"
import NotFound from "@/components/NotFound.vue"

const routes = [
  // alias 기존 주소에 별칭 부여, redirect 다른 페이지로 이동
  {path: "/", name: "Home", component: Home, alias: '/main'}, //컴포넌트의 주인공을 위의 임포트에 등록함
  {path: "/portfolio", redirect: '/'}, //redirect 다시 돌림
  {path: "/join", name: "Join", component: Join},
  {path: "/login", name: "Login", component:Login},
  // {path: "/login2", name: "Login2", component:Login2},
  {path: "/about", name: "About", component: About},
  {path: "/:catchAll(.*)+", name: "About", component: NotFound},
]

const router = createRouter({
  history: createWebHashHistory(), routes, 
})

export default router