<script lang="ts" setup>
defineProps({
  /** 標題 */
  title: {
    type: String,
    required: true
  },
  /** 手機版文字大小 */
  mobSize: {
    type: String,
    default: () => 'text-150px sm:text-200px'
  },
  /** 標題顏色 */
  color: {
    type: String,
    default: () => 'text-primary'
  },
});
</script>

<template>
  <h2 :class="[color, mobSize]" class="lg:text-300px lh-80% font-400">
    {{ title }}
  </h2>
</template>