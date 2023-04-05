<script setup>
import SettingIcon from './icons/SettingIcon.vue'
</script>

<template>
  <div
    class="flex flex-row my-2"
  >
    <div class="flex flex-row gap-2 basis-5/6">
      <div class="avatar placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
          <span>MX</span>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="font-bold">
          이예민
        </div>
        <div class="text-sm truncate max-w-[12rem]">
          이예민입니다.aaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
        <li><a>마이페이지</a></li>
        <li><a>로그아웃</a></li>
      </ul>
    </div>
  </div>
</template>