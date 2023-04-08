<script setup>
import { auth } from '../firebase'
import { signOut } from '@firebase/auth'
import { useUserStore } from '../stores/user'
import UserIcon from './icons/UserIcon.vue'
import SettingIcon from './icons/SettingIcon.vue'

const store = useUserStore()

function logout() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
  })
}
</script>

<template>
  <div>
    <div
      v-if="store.getUserInfo === null"
      class="flex flex-row my-2"
    >
      <div class="flex flex-row gap-2 basis-5/6">
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>?</span>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="font-bold">
            방문자
          </div>
          <div class="text-sm truncate max-w-[12rem]">
            나만의 필터를 공유하세요!
          </div>
        </div>
      </div>
      <RouterLink
        to="/login"
        class="btn btn-ghost basis-1/6"
        aria-label="로그인"
      >
        <UserIcon />
      </RouterLink>
    </div>
    <div
      v-if="store.getUserInfo !== null"
      class="flex flex-row my-2"
    >
      <div class="flex flex-row gap-2 basis-5/6">
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12" />
        </div>
        <div class="flex flex-col">
          <div class="font-bold">
            {{ store.getUserInfo.displayName }}
          </div>
          <div class="text-sm truncate max-w-[12rem]">
            나만의 필터를 공유하세요!
          </div>
        </div>
      </div>
      <div class="dropdown dropdown-end basis-1/6">
        <label
          tabindex="0"
          class="btn btn-ghost"
        ><SettingIcon /></label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <RouterLink to="/setting">
              설정
            </RouterLink>
          </li>
          <li><a @click="logout">로그아웃</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>