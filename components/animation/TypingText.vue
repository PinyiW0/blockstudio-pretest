<script lang="ts" setup>
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);
const typeRef = ref<HTMLElement | null>(null);

defineProps({
  txtStyle: {
    type: String,
    default: () => 'text-white text-left'
  },
});

onMounted(() => {
  if (!typeRef.value) return;
  const full = typeRef.value.textContent || '';
  typeRef.value.textContent = '';
  gsap.to(typeRef.value, {
    duration: full.length * 0.1,
    text: full,
    ease: 'none',
    delay: 0.5,
  });
});
</script>

<template>
  <p ref="typeRef" :class="txtStyle" class="text-4 text-white font-400 lh-120%">
    <slot />
  </p>
</template>