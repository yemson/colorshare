<script setup>
// import { ref } from 'vue'
</script>

<template>
  <div class="px-12">
    <div class="mb-2 mt-12">
      <h1 class="text-3xl font-bold">
        로그인
      </h1>
      <h3 class="text-sm">
        계속하시려면 로그인하세요
      </h3>
    </div>
    <div class="form-control">
      <input
        type="email"
        placeholder="이메일"
        class="input input-bordered w-full my-2"
      >
      <input
        type="password"
        placeholder="비밀번호"
        class="input input-bordered w-full mt-2"
      >
      <div class="flex gap-2 my-4">
        <input
          type="checkbox"
          class="checkbox"
        >
        <span class="label-text place-self-center">자동 로그인</span> 
      </div>
      <button class="btn btn-primary w-full">
        로그인
      </button>
      <div class="flex justify-center mt-4 gap-1 text-sm">
        회원이 아니신가요?
        <RouterLink
          to="/signup"
          class="font-bold"
        >
          회원가입
        </RouterLink>
      </div>
    </div>
  </div>
</template>