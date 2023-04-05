<script setup>
import { defineProps } from 'vue'
import ChevronIcon from './icons/ChevronIcon.vue'

defineProps({
  categoryTitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <div class="flex flex-row justify-between">
      <h1 class="text-xl font-bold place-self-center">
        {{ categoryTitle }}
      </h1>
      <button class="btn btn-ghost btn-sm">
        <ChevronIcon />
      </button>
    </div>
    <div class="carousel space-x-2 mt-2">
      <div
        v-for="i in 10"
        :key="i"
        class="carousel-item"
      >
        <div class="card card-compact bg-base-100 w-48 h-48 border">
          <div class="card-body">
            <h2 class="card-title">
              Shoes!
            </h2>
            <p class="text-sm">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>