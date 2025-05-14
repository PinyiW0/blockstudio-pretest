<script lang="ts" setup>
import { gsap } from "gsap";
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

const svgRef = ref<SVGPathElement | null>(null);

onMounted(() => {
  const svg = svgRef.value;
  if (!svg) return;
  const paths = svg.querySelectorAll<SVGPathElement>('path')

  gsap.fromTo(
    paths,
    { drawSVG: '0%' },
    {
      drawSVG: '100%',
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      repeatDelay: 0.5,
      yoyo: true
    }
  );
});
</script>

<template>
  <svg ref="svgRef" width="164" height="228" viewBox="0 0 218 233" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M153.444 61.0555V83.2778" stroke="#288E3E" stroke-width="10" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M64.5557 61.0555V83.2778" stroke="#288E3E" stroke-width="10" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M109 61.0555V116.611L75.667 149.944C75.667 149.944 86.7781 161.056 109 161.056C131.223 161.056 142.334 149.944 142.334 149.944"
      stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M53.4444 205.5H31.2222C19 205.5 9 195.5 9 183.278V27.7222C9 15.5 19 5.5 31.2222 5.5H53.4444"
      stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M164.556 205.5H186.778C199 205.5 209 195.5 209 183.278V27.7222C209 15.5 199 5.5 186.778 5.5H164.556"
      stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>