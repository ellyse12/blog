import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'hakkimda',
    component: AboutView
  },
  {
    path: '/projelerim',
    name: 'projelerim',
    component: ProjectsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
