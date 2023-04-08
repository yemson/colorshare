<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../firebase'
import router from '@/router'
import LoadingIcon from '../components/icons/LoadingIcon.vue'

const inputEmail = ref('')
const inputPassword = ref('')
const signInLoading = ref(false)

function signIn(email, password) {
  signInLoading.value = true
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    router.push('/')
    signInLoading.value = false
  })
  .catch(() => {
    alert('이메일 또는 비밀번호가 잘못되었습니다!')
    inputPassword.value = ''
    signInLoading.value = false
  })
}
</script>

<template>
  <div
    v-if="signInLoading"
    class="flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 z-50"
  >
    <LoadingIcon />
  </div>
  <div class="px-12">
    <div class="mt-12">
      <h1 class="text-3xl font-bold mb-1">
        로그인
      </h1>
      <h3 class="text-sm">
        계속하시려면 로그인하세요
      </h3>
    </div>
    <div class="form-control">
      <input
        v-model="inputEmail"
        type="email"
        placeholder="이메일"
        class="input input-bordered w-full my-2"
      >
      <input
        v-model="inputPassword"
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
      <button
        class="btn btn-primary w-full"
        @click="signIn(inputEmail, inputPassword)"
      >
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