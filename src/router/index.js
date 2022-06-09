import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home.vue"
import Join from "@/components/Join.vue"
import Login from "@/components/Login.vue"
import List from "@/components/List.vue"
import NotFound from "@/components/NotFound.vue"

const routes = [
  // alias 기존 주소에 별칭 부여, redirect 다른 페이지로 이동
  {path: "/", name: "Home", component: Home, alias: '/main'}, //컴포넌트의 주인공을 위의 임포트에 등록함
  {path: "/portfolio", redirect: '/'}, //redirect 다시 돌림
  {path: "/join", name: "Join", component: Join},
  {path: "/login", name: "Login", component:Login},
  {path: "/list", name: "List", component: List},
  {path: "/:catchAll(.*)+", component: NotFound},
]

const router = createRouter({
  history: createWebHistory(), routes, 
})

export default router