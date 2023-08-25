<script setup>
import { ref, computed } from 'vue'
import Home from './pages/Home.vue'
import Game from './pages/Game.vue'


const routes = {
  '/': Home,
  '/game': Game,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
    <component :is="currentView" />
</template>
