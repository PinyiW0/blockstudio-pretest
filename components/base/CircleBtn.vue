<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  }
});
/** 標記是否為外部連結 */
const isExternal: any = computed(() => props.to && props.to.indexOf('http') > -1);

/** 是網頁連結時另開分頁 */
const setTarget = computed(() => {
  return (props.to && props.to.indexOf('http') > -1) ? '_blank' : '_self';
});
</script>

<template>
  <NuxtLink v-if="to" :to="to" :external="isExternal" :target="setTarget"
    class="flex items-center justify-center gap-3 lg:(gap-6 items-end) decoration-none group">
    <!-- icon -->
    <div
      class="relative w-12 h-12 lg:(w-16 h-16) bg-black border-(px solid white) rounded-full duration-300 cursor-pointer group-hover:(bg-primary-green) active:(scale-90 duration-100)">
      <!-- 箭頭 -->
      <span class="absolute block w-2 lg:w-2.2 h-px bg-white origin-left rotate-10deg left-55% top-41%" />
      <!-- 箭身-->
      <span class="absolute block w-4.5 lg:w-5.5 h-px bg-white origin-center -rotate-21deg left-34% top-51%" />

      <!-- 圈圈線條 -->
      <!-- 第一圈 -->
      <div class="absolute inset-0 rounded-full border-(0.5px solid white)
        opacity-0 scale-1 transition-all duration-500 ease-out
        group-hover:(opacity-100 scale-[1.4])
      " />
      <!-- 第二圈-->
      <div class="absolute inset-0 rounded-full border-(0.5px solid primary-green) 
        opacity-0 scale-1 transition-all duration-500 ease-out
        [transition-delay:200ms]
        group-hover:(opacity-100 scale-[1.4])
      " />
    </div>

    <!-- title -->
    <div class="overflow-hidden h-5 lg:h-18">
      <div
        class="flex flex-col gap-1 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-4 lg:(group-hover:-translate-y-19)">
        <p class="text-white text-4 sm:text-5 lg:(text-20) font-400 lh-90% capitalize">{{ title }}</p>
        <p class="text-white text-4 sm:text-5 lg:(text-20) font-400 lh-90% capitalize">{{ title }}</p>
      </div>
    </div>
  </NuxtLink>

  <button v-else :aria-label="title" :disabled="disabled"
    class="disabled:( text-gray-30 border-gray-30 cursor-not-allowed)">
    <!-- icon -->
    <div
      class="relative w-12 h-12 lg:(w-16 h-16) bg-black border-(px solid white) rounded-full duration-300 cursor-pointer group-hover:(bg-primary-green) active:(scale-90 duration-100)">
      <!-- 箭頭 -->
      <span
        class="absolute block w-2 lg:w-2.2 h-px bg-white origin-left rotate-10deg left-55% top-41% disabled:border-gray-30" />
      <!-- 箭身-->
      <span
        class="absolute block w-4.5 lg:w-5.5 h-px bg-white origin-center -rotate-21deg left-34% top-51% disabled:border-gray-30" />

      <!-- 圈圈線條 -->
      <!-- 第一圈 -->
      <div class="absolute inset-0 rounded-full border-(0.5px solid white)
        opacity-0 scale-1 transition-all duration-500 ease-out
        group-hover:(opacity-100 scale-[1.4])
        disabled:opacity-0
      " />
      <!-- 第二圈-->
      <div class="absolute inset-0 rounded-full border-(0.5px solid primary-green) 
        opacity-0 scale-1 transition-all duration-500 ease-out
        [transition-delay:200ms]
        group-hover:(opacity-100 scale-[1.4])
        disabled:opacity-0
      " />
    </div>

    <!-- title -->
    <div class="overflow-hidden h-5 lg:h-18">
      <div
        class="flex flex-col gap-1 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-4 lg:(group-hover:-translate-y-19)">
        <p class="text-white text-4 sm:text-5 lg:(text-20) font-400 lh-90% capitalize">{{ title }}</p>
        <p class="text-white text-4 sm:text-5 lg:(text-20) font-400 lh-90% capitalize">{{ title }}</p>
      </div>
    </div>
  </button>
</template>