<script setup>
import { ref } from 'vue'
import router from '@/router'
import { storage, db } from '../firebase'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { uploadBytesResumable, ref as storageRef, getDownloadURL } from '@firebase/storage'
import LoadingIcon from '../components/icons/LoadingIcon.vue'

const inputName = ref('')
const inputDesc = ref('')
const exposure = ref(0)
const brilliance = ref(0)
const highlights = ref(0)
const shadow = ref(0)
const contrast = ref(0)
const brightness = ref(0)
const blackpoint = ref(0)
const saturation = ref(0)
const vibrance = ref(0)
const warmth = ref(0)
const tint = ref(0)
const sharpness = ref(0)
const definition = ref(0)
const noisereduction = ref(0)
const vignette = ref(0)

const file = ref()
const saveLoading = ref(false)

function onFileChange(event) {
  file.value = event.target.files[0]
}

function isFileImage(file) {
    return file && file['type'].split('/')[0] === 'image'
}

async function saveFilter() {
  if (inputName.value == '' && inputDesc.value == '') {
    alert('모든 칸을 채워주세요!')
  } else if (!isFileImage(file.value)) {
    alert('사진을 넣어주세요!')
  } else {
    saveLoading.value = true
    const docRef = await addDoc(collection(db, 'filters'), {
      name: inputName.value,
      desc: inputDesc.value,
      img: ''
    })
    console.log('Document written with ID: ', docRef.id)
    const imageRef = storageRef(storage, 'image/' + docRef.id)
    uploadBytesResumable(imageRef, file.value)
      .then((snapshot) => {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.')
        getDownloadURL(snapshot.ref)
        .then((url) => {
          console.log('File available at', url)
          updateDoc(doc(db, `filters/${docRef.id}`), {
            img: url
          })
          router.push('/')
          saveLoading.value = false
        })
      })
      .catch((error) => {
        alert('Upload failed', error)
        saveLoading.value = false
      })
    }
}
</script>

<template>
  <div
    v-if="saveLoading"
    class="flex items-center justify-center fixed inset-0 bg-black bg-opacity-30 z-50"
  >
    <LoadingIcon />
  </div>
  <div class="px-12">
    <div class="mt-4">
      <h1 class="text-3xl font-bold mb-1">
        새 필터 작성
      </h1>
      <h3 class="text-sm">
        새 필터를 작성해서 공유해보세요!
      </h3>
    </div>
    <div class="form-control mt-6">
      <div>
        <h4 class="text-lg font-bold">
          필터 이름
        </h4>
        <input
          v-model="inputName"
          type="text"
          class="input input-bordered w-full mt-1"
        >
      </div>
      <div>
        <h4 class="text-lg mt-2 font-bold">
          필터 설명
        </h4>
        <textarea
          v-model="inputDesc"
          class="textarea textarea-bordered mt-1 w-full"
        />
      </div>
      <input
        accept="image/png, image/jpeg, image/jpg"
        type="file"
        class="file-input file-input-bordered file-input-sm w-full max-w-xs"
        @change="onFileChange"
      >
      <div class="mt-4 space-y-3">
        <h4 class="text-lg font-bold">
          필터 정보
        </h4>
        <div class="flex flex-row gap-3">
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              노출
            </p>
            <input
              v-model="exposure"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (exposure > 100 || exposure < -100) { exposure = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              휘도
            </p>
            <input
              v-model="brilliance"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (brilliance > 100 || brilliance < -100) { brilliance = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              하이라이트
            </p>
            <input
              v-model="highlights"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (highlights > 100 || highlights < -100) { highlights = 0 }}"
            >
          </div>
        </div>
        <div class="flex flex-row mt-1 gap-3">
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              그림자
            </p>
            <input
              v-model="shadow"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (shadow > 100 || shadow < -100) { shadow = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              대비
            </p>
            <input
              v-model="contrast"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (contrast > 100 || contrast < -100) { contrast = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              밝기
            </p>
            <input
              v-model="brightness"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (brightness > 100 || brightness < -100) { brightness = 0 }}"
            >
          </div>
        </div>
        <div class="flex flex-row mt-1 gap-3">
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              블랙 포인트
            </p>
            <input
              v-model="blackpoint"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (blackpoint > 100 || blackpoint < -100) { blackpoint = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              채도
            </p>
            <input
              v-model="saturation"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (saturation > 100 || saturation < -100) { saturation = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              색 선명도
            </p>
            <input
              v-model="vibrance"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (vibrance > 100 || vibrance < -100) { vibrance = 0 }}"
            >
          </div>
        </div>
        <div class="flex flex-row mt-1 gap-3">
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              따듯함
            </p>
            <input
              v-model="warmth"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (warmth > 100 || warmth < -100) { warmth = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              색조
            </p>
            <input
              v-model="tint"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (tint > 100 || tint < -100) { tint = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              선명도
            </p>
            <input
              v-model="sharpness"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (sharpness > 100 || sharpness < -100) { sharpness = 0 }}"
            >
          </div>
        </div>
        <div class="flex flex-row mt-1 gap-3">
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              명료도
            </p>
            <input
              v-model="definition"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (definition > 100 || definition < -100) { definition = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              노이즈 감소
            </p>
            <input
              v-model="noisereduction"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (noisereduction > 100 || noisereduction < -100) { noisereduction = 0 }}"
            >
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-sm flex justify-center">
              비네트
            </p>
            <input
              v-model="vignette"
              type="number"
              class="input input-bordered w-full"
              @input="() => { if (vignette > 100 || vignette < -100) { vignette = 0 }}"
            >
          </div>
        </div>
      </div>
      <div class="space-y-3 my-8">
        <button
          class="btn btn-primary w-full"
          @click="saveFilter"
        >
          작성
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