<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});
</script>

<template>
  <div class="px-10 py-25 lg:py-12 xl:py-25 w-full h-full flex flex-col items-center gap-6">
    <slot name="topPic" />
    <div class="mt-11 lg:(mt-7 items-center) flex flex-col gap-6">
      <div class="flex flex-col gap-4">
        <h3 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
          class="text-8 lg:text-20 2xl:(mr--15 whitespace-nowrap) text-primary-green font-400 lh-90% capitalize">
          {{ title }}
        </h3>
        <h3 data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom"
          class="2xl:mr--15 text-4 text-primary-green font-400 lh-120% ">
          {{ content }}</h3>
      </div>
      <div class="mr-auto 2xl:ml--15">
        <BaseDeafultBtn data-aos="zoom-in-right" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom"
          title="learn more" class="mt-2 " />
      </div>
      <slot name="bottomPic" />
    </div>
  </div>
</template>