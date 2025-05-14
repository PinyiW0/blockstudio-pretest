<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  direction: {
    type: String as PropType<'up' | 'down'>,
    default: 'down'
  }
});
</script>

<template>
  <div :class="['marquee', `marquee-${props.direction}`, 'flex', 'flex-col', 'gap-25']">
    <UiPageTittle :title="title" color="text-primary-green" class="flex-shrink-0" />
  </div>
</template>

<style scoped>
/* 向下跑馬燈 */
@keyframes marquee-down {
  0% {
    transform: translateY(-120%);
  }

  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

/* 向上跑馬燈 */
@keyframes marquee-up {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(-250%);
  }
}

/* 根據 direction 動態套 animation */
.marquee-down {
  animation: marquee-down 4s ease-in-out infinite;
}

.marquee-up {
  animation: marquee-up 4s linear infinite;
}

/* 容器基礎樣式 */
.marquee {
  display: flex;
  flex-direction: column;
}
</style>