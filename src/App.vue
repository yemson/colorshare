<script setup>
import { RouterView } from 'vue-router'
import TopNavBar from './components/TopNavBar.vue'
</script>

<template>
  <div class="container">
    <header>
      <TopNavBar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
