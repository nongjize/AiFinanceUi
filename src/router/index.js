import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    //刚加载时的默认路由
    path:'/',
    redirect: '/index',
  },
  {
    //index发生时的路由
    path: '/index',
    name:'index',
    component: () => import('../views/index.vue')

  },
  {
    path: '/aistocks',
    name: 'aistocks',
    component: () => import('../views/AIstocks.vue')
  },
  {
    path: '/investclass',
    name: 'investclass',
    component: () => import('../views/Investment_Classroom.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/community.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/help.vue')
  },
  {
    path: '/hidedra',
    name: 'hidedra',
    component: () => import('../views/Hidden_Dragon.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/personal.vue')
  },
  
  // {
  //   path:"/MobileChat",
  //   name:'MobileChat',
  //   component:MobileChatVue,
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
