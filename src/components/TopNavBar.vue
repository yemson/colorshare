<script setup>
import UserIcon from './icons/UserIcon.vue'
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link
        to="/"
        class="btn btn-ghost normal-case text-xl"
      >
        색감나눔
      </router-link>
    </div>
    <router-link
      to="/login"
      class="btn btn-ghost"
    >
      <UserIcon />
    </router-link>
  </div>
</template>