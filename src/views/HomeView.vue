<script setup>
import FilterCard from '../components/FilterCard.vue'
import UserInfo from '../components/UserInfo.vue'

</script>

<template>
  <div class="px-5">
    <UserInfo class="mb-6" />
    <div class="space-y-4 mb-4">
      <FilterCard category-title="화사한 봄🌸" />
      <FilterCard category-title="여름" />
      <FilterCard category-title="가을" />
      <FilterCard category-title="겨울" />
    </div>
  </div>
</template>
