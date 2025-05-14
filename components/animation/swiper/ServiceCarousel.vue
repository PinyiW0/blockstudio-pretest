<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCreative } from 'swiper/modules';

const modules = [EffectCreative];
const slides = [
  {
    title: 'Cinquième Élément',
    content: 'Its plot occurs out of chronological order.',
    topPic: true,
    bottomPic: null,
  },
  {
    title: 'Cinquième Élément',
    content: 'Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.',
    topPic: null,
    bottomPic: '/service/face.svg',
  },
  {
    title: 'Cinquième Élément',
    content: 'Its plot occurs out of chronological order.',
    topPic: true,
    bottomPic: null,
  },
  {
    title: 'Cinquième Élément',
    content: 'Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.',
    topPic: null,
    bottomPic: '/service/face.svg',
  },
];
</script>

<template>
  <ClientOnly>
    <swiper :slidesPerView="1.2" :grabCursor="true" effect="creative" :creativeEffect="{
      prev: { shadow: true, translate: [0, 0, -400], opacity: 0 },
      next: { translate: ['100%', 0, 0], opacity: 1 }
    }" :fadeEffect="{ crossFade: true }" :breakpoints="{
      796: {
        slidesPerView: 2,
        spaceBetween: 0
      }
    }" :modules="modules" class="w-full h-680px sm:(h-636px) lg:(h-680px) 2xl:(h-603px)">
      <swiper-slide v-for="(item, idx) in slides" :key="idx"
        class="h-full xl:px-15 flex items-stretch items-center justify-center border-r-(px solid primary-green) bg-black">
        <UiServiceCard :title="item.title" :content="item.content">
          <!-- topPic slot -->
          <template v-if="item.topPic" #topPic>
            <div class="w-164px h-228px xl:(w-144px h-50)">
              <IconHand />
            </div>
          </template>
          <!-- bottomPic slot -->
          <template v-if="item.bottomPic" #bottomPic>
            <div class="w-164px h-228px xl:(w-144px h-50)">
              <IconFace />
            </div>
          </template>
        </UiServiceCard>
      </swiper-slide>
    </swiper>
  </ClientOnly>
</template>