<script setup>
import { ref } from 'vue'
import router from '@/router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import LoadingIcon from '../components/icons/LoadingIcon.vue'

const inputEmail = ref('')
const inputPassword = ref('')
const inputCheckPassword = ref('')
const inputDisplayName = ref('')
const signupLoading = ref(false)

function signup(email, password, displayName) {
  if (inputPassword.value !== '' && inputPassword.value === inputCheckPassword.value && inputDisplayName.value !== '') {
    signupLoading.value = true
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      updateProfile(user, {
        displayName: displayName
      }).then(() => {
        router.replace('/')
        signupLoading.value = false
      }).catch((error) => {
        const errorCode = error.code
        alert('ERROR: ', errorCode)
        signupLoading.value = false
      })
    })
    .catch((error) => {
      const errorCode = error.code
      alert('ERROR: ', errorCode)
      signupLoading.value = false
    }) 
  } else {
    alert('비밀번호 또는 닉네임을 다시 입력해주세요!')
    signupLoading.value = false
  }
}
</script>

<template>
  <div
    v-if="signupLoading"
    class="flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 z-50"
  >
    <LoadingIcon />
  </div>
  <div class="px-12">
    <div class=" mt-12">
      <h1 class="text-3xl font-bold mb-1">
        회원가입
      </h1>
      <h3 class="text-sm">
        계속하시려면 회원가입하세요
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
        v-model="inputDisplayName"
        type="text"
        placeholder="닉네임"
        class="input input-bordered w-full my-2"
      >
      <input
        v-model="inputPassword"
        type="password"
        placeholder="비밀번호"
        class="input input-bordered w-full my-2"
      >
      <input
        v-model="inputCheckPassword"
        type="password"
        placeholder="비밀번호 확인"
        class="input input-bordered w-full mt-2"
      >
      <button
        class="btn btn-primary w-full mt-4"
        @click="signup(inputEmail, inputCheckPassword, inputDisplayName)"
      >
        회원가입
      </button>
      <div class="flex justify-center mt-4 gap-1 text-sm">
        <p>이미 회원이신가요?</p>
        <RouterLink
          to="/login"
          class="font-bold"
        >
          로그인
        </RouterLink>
      </div>
    </div>
  </div>
</template>