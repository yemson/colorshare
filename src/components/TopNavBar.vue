<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../stores/user'

const store = useUserStore()

onMounted(() => {
  store.userState()
})
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <RouterLink
        to="/"
        class="normal-case text-xl font-bold px-3"
      >
        색감나눔
      </RouterLink>
    </div>
  </div>
</template>