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
    <div class="form-control">
      <input
        v-model="inputDisplayName"
        type="text"
        :placeholder="auth.currentUser.displayName"
        class="input input-bordered w-full my-2"
      >
      <button
        class="btn btn-primary w-full mt-2"
        @click="updateDisplayName(inputDisplayName)"
      >
        수정
      </button>
    </div>
  </div>
</template>