<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCreative, Parallax } from 'swiper/modules';

const modules = [Autoplay, EffectCreative, Parallax];
defineProps({
  containerSize: {
    type: String,
    default: () => 'w-full'
  },
  slideSize: {
    type: String,
    default: () => 'w-288px h-338px sm:w-600px lg:(w-746px h-519px)'
  },
  picPath: {
    type: String,
    default: () => '/hero/hero-1.png'
  },
  picAlt: {
    type: String,
    default: () => 'Hero 主圖'
  }
});
</script>

<template>
  <ClientOnly>
    <swiper :grabCursor="true" effect="creative" :creativeEffect="{
      prev: { shadow: true, translate: [0, 0, -400], opacity: 0 },
      next: { translate: ['100%', 0, 0], opacity: 1 }
    }" :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }" :fadeEffect="{ crossFade: true }" parallax :speed="800" :modules="modules" :class="containerSize">
      <div slot="container-start" class="parallax-bg absolute inset-0" data-swiper-parallax="-20%"></div>
      <swiper-slide v-for="idx in 5" :key="idx" :class="slideSize" class="flex items-center justify-center">
        <div data-swiper-parallax="-200">
          <UiCard :size="slideSize" :pic="picPath" :alt="picAlt" />
        </div>
      </swiper-slide>
    </swiper>
  </ClientOnly>
</template>