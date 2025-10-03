import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Nosotros from './views/Nosotros.vue'
import Contacto from './views/Contacto.vue'
import OfertaEducativa from './views/OfertaEducativa.vue'
import EventosEspeciales from './views/EventosEspeciales.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/nosotros', name: 'Nosotros', component: Nosotros },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/oferta-educativa', name: 'OfertaEducativa', component: OfertaEducativa },
  { path: '/eventos-especiales', name: 'EventosEspeciales', component: EventosEspeciales },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router