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
    <div class="carousel space-x-3 mt-2">
      <div
        v-for="i in 10"
        :key="i"
        class="carousel-item"
      >
        <div class="card card-compact w-48 h-52 bg-base-100 image-full">
          <figure>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Picture"
              class="object-cover w-48 h-52"
            >
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Shoes!
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<style scoped>
.card.image-full:before {
    position: relative;
    content: "";
    z-index: 10;
    --tw-bg-opacity: 0.4;
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
    opacity: 0.75;
    border-radius: var(--rounded-box, 1rem);
}
</style>