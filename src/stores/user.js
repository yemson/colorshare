import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref(null)
  const getUserInfo = computed(() => userInfo.value)

  function userState() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userInfo.value = user
      } else {
        userInfo.value = null
      }
    })
  }

  return { userInfo, getUserInfo, userState }
})
