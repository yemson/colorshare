<script setup>
import FilterCard from '../components/FilterCard.vue'
import UserInfo from '../components/UserInfo.vue'

</script>

<template>
  <div class="px-5">
    <UserInfo class="mb-6" />
    <div class="space-y-4 mb-4">
      <FilterCard category-title="✨ 최신 필터" />
      <FilterCard category-title="🔥 핫 필터" />
      <FilterCard category-title="🌸 벚꽃이 화사한 봄" />
    </div>
  </div>
</template>
