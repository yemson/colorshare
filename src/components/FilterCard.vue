<script setup>
import ChevronIcon from './icons/ChevronIcon.vue'

const props = defineProps({
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
        {{ props.categoryTitle }}
      </h1>
      <button
        class="btn btn-ghost btn-sm"
        aria-label="더보기"
      >
        <ChevronIcon />
      </button>
    </div>
    <div class="carousel h-[13rem] space-x-3 mt-2">
      <div
        v-for="i in 10"
        :key="i"
        class="carousel-item"
      >
        <div class="card card-compact w-48 max-w-[12rem] h-48 bg-base-100 image-full">
          <figure>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Picture"
              class="object-cover w-48 h-48"
            >
          </figure>
          <div class="card-body">
            <h2 class="font-bold text-xl text-ellipsis overflow-hidden break-words line-clamp-2 w-[10rem]">
              듣기만 우리의 두기 이 더운지라 교향악이다.
            </h2>
            <p class="w-[10rem] text-ellipsis overflow-hidden line-clamp-5 break-words">
              때에, 그들의 황금시대의 끓는다. 없는 피고, 충분히 그들의 용기가 길을 대고, 힘있다. 일월과 싶이 뼈 이것이다. 속에서 끓는 같이 쓸쓸하랴?
            </p>
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