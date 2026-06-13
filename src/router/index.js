import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CitiesView from '@/views/CitiesView.vue';
import CityView from '@/views/CityView.vue';
import SpotView from '@/views/SpotView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

{
  path: '/',
  component: HomeView,
},
{
  path:'/cities',
  component:CitiesView,
},
{
  path:'/cities/:city',
  component:CityView,
},
{
  path:'/cities/:city/spots/:id',
  component:SpotView,
}
  ],
})

export default router
