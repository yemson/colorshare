<script setup>
import { onMounted } from 'vue'
import FilterCard from '../components/FilterCard.vue'
import UserInfo from '../components/UserInfo.vue'
import PlusIcon from '../components/icons/PlusIcon.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="px-5">
    <UserInfo class="mt-2 mb-6" />
    <div class="space-y-4 mb-4">
      <FilterCard category-title="✨ 최신 필터" />
      <FilterCard category-title="🔥 핫 필터" />
      <FilterCard category-title="🌸 벚꽃이 화사한 봄" />
    </div>
  </div>
  <RouterLink
    to="/create-filter"
    class="fixed bottom-0 right-0 m-6 z-50 btn btn-lg btn-primary btn-circle"
  >
    <PlusIcon />
  </RouterLink>
</template>
