<script lang="ts" setup>
import { gsap } from 'gsap';

const props = defineProps({
  words: {
    type: Array as PropType<string[]>,
    required: true,
  },
  direction: {
    type: String as PropType<'left' | 'right'>,
    default: () => 'left',
  },
});

const marquee = ref<HTMLElement | null>(null);

const animate = () => {
  if (!marquee.value) return
  gsap.killTweensOf(marquee.value);
  if (props.direction === 'left') {
    // 往左跑
    gsap.fromTo(
      marquee.value,
      { xPercent: 0 },
      { xPercent: -50, duration: 12, ease: 'none', repeat: -1 }
    )
  } else {
    // 往右跑
    gsap.fromTo(
      marquee.value,
      { xPercent: -50 },
      { xPercent: 0, duration: 12, ease: 'none', repeat: -1 }
    )
  }
};

watch([() => props.direction], () => animate());
onMounted(() => animate());
</script>

<template>
  <div :class="[props.direction === 'left' ? 'pb-10 border-b-(px solid gray-30)' : 'pt-6 border-t-(px solid gray-30)']"
    class="overflow-hidden whitespace-nowrap pb-8 pb-8">
    <div ref="marquee" class="inline-flex items-center gap-8">
      <template v-for="round in 2" :key="round">
        <template v-for="(word, idx) in words" :key="idx">
          <p class="text-16 xl:text-30 text-secondary font-400 lh-80% uppercase">
            {{ word }}
          </p>
          <div v-if="idx < words.length - 1" class="w-70px h-px bg-secondary transform translate-y-2.5 rotate-110deg" />
        </template>
      </template>
    </div>
  </div>
</template>