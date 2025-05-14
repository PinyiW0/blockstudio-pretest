<script lang="ts" setup>
defineProps({
  /** 動畫位置定位 */
  position: {
    type: String,
    required: true,
  },
  /** 動畫繞圓距離設定 */
  path: {
    type: String,
    default: () => 'w-250 h-150',
  },
  /** 圓圈大小 */
  size: {
    type: String,
    default: () => 'w-60 h-60',
  },
  /** 
   * @cw 順時針方向
   * @ccw 逆時針方向
   */
  direction: {
    type: String,
    default: () => 'cw',
  },
});
</script>

<template>
  <div :class="position" class="absolute">
    <div :class="path" class="relative">
      <div :class="direction === 'ccw' ? 'animate-orbit-reverse' : 'animate-orbit'"
        class="absolute inset-0 origin-center">
        <div :class="size"
          class="animate-pulse absolute top-0 left-1/2 -translate-x-1/2 rounded-full blur-xl opacity-20 bg-gradient-to-r from-primary/50 to-yellow-300/50" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes orbit {
  to {
    transform: rotate(360deg);
  }
}

/* 順時針 */
.animate-orbit {
  animation: orbit 8s linear infinite;
}

/* 逆時針 */
.animate-orbit-reverse {
  animation: orbit 8s linear infinite reverse;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
</style>