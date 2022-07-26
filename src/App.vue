<template>
  <Nav />
  <LateralNav />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<script>

import { onMounted, provide } from 'vue'
import LateralNav from './components/Nav/LateralNav.vue'
import Nav from './components/Nav/Nav.vue'
import Footer from './components/UI/Footer.vue'
import store from './store/state'

export default {
  
  components: { Footer, Nav, LateralNav },
  
  setup(){
    provide('store', store);
    onMounted(() => {
      const theme = store.state.getThemeFromStorage();
      store.state.setTheme(theme);
    })
  }

}
</script>

<style scoped>
  .route-enter-from{
    opacity: 0;
    transform: translateY(100px);
  }

  .route-enter-active{
    transition: all 0.3s ease-out;
  }

  .route-leave-to{
    opacity: 0;
    transform: translateY(-100px);
  }

  .route-leave-active{
    transition: all 0.3s ease-in;
  }
</style>

