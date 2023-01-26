// Composables
import { createRouter, createWebHistory } from 'vue-router'
import PoemsVue from '@/views/Poems.vue'
import AddPoem from "../views/AddPoem";
import EditPoem from "../views/EditPoem";
import RegisterViewVue from '@/views/RegisterView.vue';
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/PoemHub.vue'),
      },
      {
        path: '/poems',
        name: 'poems',
        component: PoemsVue,
      },
      {
        path: "/add-poem",
        name: "addpoem",
        component: AddPoem,
      },
      {
        path: "/poems/:poemId",
        name: "editpoem",
        component: EditPoem,
      },
      {
        path: "/register",
        name: "register",
        component: RegisterViewVue,
      },
      {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/LoginView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
