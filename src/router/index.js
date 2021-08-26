import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import SingleCity from '../views/SingleCity.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Npc from '../views/Npc.vue'
import NpcCreation from '../views/NpcCreation.vue'
import CharacterCreation from '../views/CharacterCreation.vue'
import SingleCharacter from '../views/SingleCharacter.vue'
import CharacterSheet from '../views/CharacterSheet.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cities',
    name: 'Cities',
    component: City
  },
  {
    path:`/city/:id`,
    name:'City',
    component: SingleCity

  },
  {
    path:'/signup',
    name:'Signup',
    component: SignUp
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path:'/npc',
    name:'npc',
    component: Npc
  },
  {
    path:'/npccreation',
    name:'npccreation',
    component: NpcCreation
  },
  {
    path:'/charactercreation',
    name:'characterCreation',
    component: CharacterCreation
  },
  {
    path:`/character/:id`,
    name:'CharacterSheet',
    component: CharacterSheet

  },
  {
    path:`/updatecharacter/:id`,
    name:'UpdateCharacter',
    component: SingleCharacter

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
