<script lang="ts" setup>
defineProps({
  /** 寬高 */
  size: {
    type: String,
    default: () => 'w-full h-full',
  },
  /** 圖片 */
  pic: {
    type: String,
    required: true,
  },
  /** 標題 */
  topTitle: {
    type: String,
    default: () => '',
  },
  /** 方向 */
  titleRight: {
    type: String,
    default: () => 'text-start',
  },
  /** 標題 */
  bottomTitle: {
    type: String,
    default: () => '',
  },
});
</script>

<template>
  <div class="flex flex-col gap-4 h-full">
    <h3 v-if="topTitle" :class="titleRight" class="text-white text-7 lh-90% font-400 uppercase">
      {{ topTitle }}</h3>
    <div :class="size" class="mt-4 overflow-hidden group">
      <img :src="pic" :alt="bottomTitle || '藝廊圖片'"
        class="w-full h-full object-cover duration-400 cursor-pointer group-hover:(scale-110 filter-grayscale)">
    </div>
    <h4 v-if="bottomTitle" class="text-primary-green text-5 lh-90% font-400">1997 Christopher Fairbank0</h4>
  </div>
</template>