<script setup>
import { RouterView } from 'vue-router'
import NavComp from '@/components/NavComp.vue';
import FootNav from '@/components/FootNav.vue';


</script>

<template>

  <NavComp/>
  <RouterView v-slot="{ Component }">
    <transition name="fadeUp" mode="out-in">
      <component :is="Component" :key="$router.path"></component>
    </transition>  
  </RouterView>

  <FootNav/>
</template>

<style >
body{
  display: block;
  width: 100%;
}

#app{
  display: block;
  max-width: 100%;
  padding: 0px;
}

.fadeUp-enter-active, .fadeUp-leave-active {
  transition: opacity 0.25s, transform 0.25s
}

.fadeUp-enter, .fadeUp-leave-to {
  opacity: 0;
  transform: translateY(30%);
}
</style>
