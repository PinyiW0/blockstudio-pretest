<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
});

const x = ref(0);
const y = ref(0);
const visible = ref(false);

const onMouseMove = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
};

onMounted(() => {
  // 頁面載入後就開始追蹤
  window.addEventListener('mousemove', onMouseMove)
  visible.value = true
});
onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  visible.value = false
});
</script>

<template>
  <div v-if="visible" :style="{ left: `${x}px`, top: `${y}px` }" :class="[
    'z-20 fixed pointer-events-none rounded-full mix-blend-difference bg-white opacity-80 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300',
    active ? 'w-[264px] h-[264px]' : 'w-[20px] h-[20px]'
  ]" />
</template>