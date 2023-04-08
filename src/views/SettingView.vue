<script setup>
import { ref } from 'vue'
import { updateProfile } from '@firebase/auth'
import { auth } from '../firebase'
import LoadingIcon from '../components/icons/LoadingIcon.vue'

const inputDisplayName = ref('')
const updateLoading = ref(false)

function updateDisplayName(displayName) {
  updateLoading.value = true
  updateProfile(auth.currentUser, {
    displayName: displayName
  }).then(() => {
    updateLoading.value = false
  }).catch((error) => {
    alert('ERROR: ', error)
    updateLoading.value = false
  })
}
</script>

<template>
  <div
    v-if="updateLoading"
    class="flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 z-50"
  >
    <LoadingIcon />
  </div>
  <div class="px-12">
    <div class=" mt-12">
      <h1 class="text-3xl font-bold mb-4">
        계정 설정
      </h1>
    </div>
    <!-- <div class="form-control">
      <h2 class="font-bold mb-1">
        프로필 사진
      </h2>
      <input
        type="file"
        class="file-input file-input-bordered file-input-sm w-full max-w-xs"
      >
    </div> -->
    <div class="form-control">
      <h2 class="font-bold mt-2 mb-1">
        닉네임
      </h2>
      <input
        v-model="inputDisplayName"
        type="text"
        :placeholder="auth.currentUser.displayName"
        class="input input-bordered w-full mb-2"
      >
      <div class="space-y-3">
        <button
          class="btn btn-primary w-full mt-2"
          @click="updateDisplayName(inputDisplayName)"
        >
          수정
        </button>
        <RouterLink
          to="/"
          class="btn btn-outline
           w-full"
        >
          취소
        </RouterLink>
      </div>
    </div>
  </div>
</template>