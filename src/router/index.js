import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Portfolio from '../views/Portfolio.vue'
import Press from '../views/Press.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Mario Mazzola\'s Portfolio'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Mario Mazzola'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Mario Mazzola\' Portfolio'
    }
  },
  {
    path: '/press',
    name: 'Press',
    component: Press,
    meta: {
      title: 'Mario Mazzola in the Press'
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: {
      title: 'Contact Mario Mazzola'
    }
  },

  //Catch all and redirect home
  {
    path: '/:pathMatch(.*)*',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Mario Mazzola\'s Portfolio'
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
}) 

router.afterEach((to, from) => {
  window.scroll(0, 0);
})

export default router
