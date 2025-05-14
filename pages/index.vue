<script lang="ts" setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const wrapper = ref<HTMLElement | null>(null);

// 滑鼠游標
const circleX = ref<number>(0);
const circleY = ref<number>(0);
const isHover = ref<boolean>(false);

/** 偵測游標位置 */
const handleMouseMove = (e: MouseEvent) => {
  circleX.value = e.clientX
  circleY.value = e.clientY
};

onMounted(async () => {
  // 綁滑鼠位置
  window.addEventListener('mousemove', handleMouseMove);
  await nextTick(() => {
    // 控制 Gallery 進場動畫
    gsap.fromTo(wrapper.value,
      { autoAlpha: 0, scale: 3, transformOrigin: 'center center' },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: wrapper.value,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
  });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>

<template>
  <BaseLoading />
  <!-- Hero Area -->
  <section class="pt-6 pb-16 lg:(pt-9 pb-18) flex flex-col bg-black">
    <!-- Banner -->
    <div id="about" class="relative w-full min-h-490px lg:min-h-657px flex flex-col">
      <div class="px-6 w-full flex flex-col items-start justify-start">
        <ClientOnly>
          <UiPageTittle data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom"
            title="1976--" mobSize="text-16 sm:text-100px" class="z-3 lg:(absolute -left-10)" />
          <UiPageTittle data-aos="fade-right" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom"
            title="Mazda" mobSize="text-16 sm:text-100px" class="z-3 lg:(absolute -right-10)" />
          <UiPageTittle data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom"
            title="RX7s" mobSize="text-16 sm:text-100px" class="z-3 lg:(z-6 absolute -left-10 top-60)" />
        </ClientOnly>
      </div>
      <div
        class="z-2 absolute top-28 left-0 w-288px h-338px sm:w-600px lg:(z-5 left-1/2 bottom-0 -translate-x-1/2 w-746px h-519px)">
        <ClientOnly>
          <AnimationSwiperBnCarousel data-aos="fade-left" data-aos-duration="2000"
            data-aos-anchor-placement="bottom-bottom" />
        </ClientOnly>
      </div>
      <ClientOnly>
        <figure data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom"
          class="z-1 absolute top-0 right-0 w-142px h-161px sm:(w-350px h-230px) lg:(w-503px h-417px right-20)">
          <img src="/hero/hero-2.png" alt="Hero 副主圖"
            class="w-full h-full object-cover duration-400 cursor-pointer group-hover:(scale-110 filter-grayscale)">
          <figcaption>人拿著娃娃的放大照</figcaption>
        </figure>
        <UiPageTittle data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom"
          title="Movie" mobSize="text-16 sm:text-100px" class="z-3 absolute -bottom-1 right-0 lg:hidden" />
      </ClientOnly>
    </div>
    <!-- 文字說明區 -->
    <div class="relative px-6 pt-26px w-full lg:(px-17 pt-9) flex flex-col items-start gap-8 overflow-hidden">
      <ClientOnly>
        <div class="max-w-474px flex flex-col items-start lg:items-end gap-51px">
          <div class="min-h-20">
            <AnimationTypingText data-aos="fade-right" data-aos-duration="1000">
              Sit elit incididunt Lorem minim ea pariatur anim dolor
              ut veniam amet ad.Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa.
            </AnimationTypingText>
          </div>
          <BaseCircleBtn data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" to="/"
            title="View All" class="pb-11" />
        </div>
        <UiPageTittle data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
          title="Movie" mobSize="text-16 sm:text-100px" class="z-3 absolute bottom-12 -right-28 hidden lg:block" />
      </ClientOnly>
    </div>
  </section>

  <!-- Story Area -->
  <section id="story" @mouseenter="isHover = true" @mouseleave="isHover = false"
    class="relative pt-388px pb-112px lg:py-22 w-full flex flex-col bg-secondary-120 overflow-hidden">
    <!-- StoryMarquee -->
    <div
      class="absolute -top-17 left-1/2 -translate-x-1/2 lg:(left-0 top-1/2 -translate-y-1/2 h-417px) overflow-hidden h-40">
      <AnimationMarqueeVertical title="Story" direction="up" />
      <AnimationMarqueeVertical title="Story" class="hidden lg:block" />
    </div>
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 lg:(left-100% top-1/2 -translate-y-1/2 h-417px) overflow-hidden h-15">
      <AnimationMarqueeVertical title="Story" direction="up" />
      <AnimationMarqueeVertical title="Story" class="hidden lg:block" />
    </div>

    <!-- 3D Doll -->
    <div class="z-10 absolute inset-0 mb-20 xl:mb-0 flex justify-center items-center">
      <ModalDollNew src="/models/doll-new.obj" class="w-60 h-60" />
      <ModalDoll src="/models/horse-doll.obj" class="w-80 h-80" />
      <ModalApple src="/models/horse-doll.obj" class="w-60 h-60" />
    </div>

    <!-- content -->
    <div class="px-6 w-full flex flex-col items-center gap-26px sm:px-60 lg:(px-484px)">
      <ClientOnly>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
          class="w-66px h-10 overflow-hidden">
          <img src="/story/story.svg" alt="story" class="w-full h-full object-cover">
        </div>
        <div class="min-h-25 lg:min-w-90 ">
          <AnimationTypingText data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom"
            txtStyle="text-primary-green text-center">
            Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem
            incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit
            tempor culpa.
          </AnimationTypingText>
        </div>
      </ClientOnly>
    </div>
  </section>

  <!-- Service Area -->
  <section id="service" class="lg:px-10 bg-black">
    <AnimationSwiperServiceCarousel />
  </section>

  <!-- Marquee Area -->
  <section class="pt-8 xl:pb-2 w-full bg-secondary-10">
    <AnimationMarqueeHorizontal :words="['PURE', 'ORGANIC', 'TRUE ROMANCE']" />
    <AnimationMarqueeHorizontal direction="right" :words="['PURE', 'ORGANIC', 'TRUE ROMANCE']" />
  </section>

  <!-- Gallery Area -->
  <section id="gallery" class="relative pt-15 pb-10 w-full flex flex-col items-center gap-8 bg-black">
    <AnimationDecoLightDot position="-left-70 bottom-0" direction="ccw" path="w-300 h-200" />
    <AnimationDecoLightDot position="-right-20 top-40" size="w-20 h-20" direction="cw" path="w-300 h-150" />
    <AnimationDecoLightDot position="right-20 bottom-80" size="w-20 h-20" direction="cw" path="w-100 h-150" />
    <!-- Mob 標題 -->
    <ClientOnly>
      <UiPageTittle data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
        title="Gallery" mobSize="text-150px sm:text-200px" class="text-center whitespace-nowrap xl:hidden" />

      <div
        class="px-4.5 grid grid-cols-1 gap-y-8 gap-x-4 w-full items-start md:(px-6 grid-cols-6 gap-x-5 [&>*:nth-child(2n)]:mt-20) xl:([&>*:nth-child(2n)]:mt-0 pt-204px px-18 grid-cols-12 gap-x-6 gap-y-4)">
        <!-- 副標題 -->
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom"
          class="col-span-12 md:(col-span-6 my-8 gap-2) xl:(col-span-2 my-0) flex flex-col">
          <h3 class="text-white text-7 lh-90% font-400 uppercase md:(text-center) xl:text-start">summer</h3>
          <h3 class="text-white text-7 lh-90% font-400 uppercase md:(text-center) xl:text-start">collection</h3>
        </div>

        <!-- SECTION 01 -->
        <UiCard data-aos="fade-up-right" data-aos-duration="1500" topTitle="SECTION 01" titleRight="xl:text-right"
          bottomTitle="1997 Christopher Fairbank0" pic="/gallery/d/0.png" size="w-full max-h-357px xl:h-512px"
          class="col-span-12 md:(col-span-3) xl:(col-span-6 !mt-10)" />
        <UiCard data-aos="fade-up-left" data-aos-duration="2000" bottomTitle="1997 Christopher Fairbank0"
          pic="/gallery/d/1.png" size="w-full max-h-357px xl:h-351px"
          class="col-span-12 md:(col-span-3) xl:(col-span-4 mt-61)" />

        <!-- Web 標題 -->
        <div class="relative inline-block hidden col-span-12 md:(col-span-3) xl:(block col-span-12 mt-0)">
          <AnimationDecoLightDot position="left-60 -bottom-40" direction="ccw" path="w-400 h-200" />
          <AnimationDecoLightDot position="right-60 -bottom-80" size="w-90 h-90" path="w-800 h-400" />
          <div ref="wrapper" class="opacity-0">
            <UiPageTittle ref="galleryTitle" title="Gallery" mobSize="text-150px sm:text-200px"
              class="col-span-12 md:(col-span-3) xl:(block col-span-12 mt-0) text-center whitespace-nowrap" />
          </div>
        </div>

        <!-- SECTION 02 -->
        <UiCard data-aos="fade-up-right" data-aos-duration="1500" topTitle="SECTION 02"
          titleRight="text-start xl:hidden" bottomTitle="1997 Christopher Fairbank0" pic="/gallery/d/2.png"
          size="w-full max-h-357px xl:(h-501px)" class="col-span-12 md:(col-span-3) xl:(col-span-4)" />
        <UiCard data-aos="fade-up-left" data-aos-duration="2000" topTitle="SECTION 02"
          titleRight="hidden xl:(block text-right)" bottomTitle="1997 Christopher Fairbank0" pic="/gallery/d/3.png"
          size="w-full max-h-357px xl:(h-376px)"
          class="col-span-12 md:(col-span-3) !xl:(col-span-3 col-start-7 mt-100px)" />
        <UiCard data-aos="fade-up-right" data-aos-duration="1500" bottomTitle="1997 Christopher Fairbank0"
          pic="/gallery/d/4.png" size="w-full max-h-357px xl:(h-545px)"
          class="col-span-12 md:(col-span-3) xl:(col-span-3 mt-140px)" />

        <!-- SECTION 03 -->
        <UiCard data-aos="fade-up-left" data-aos-duration="2000" topTitle="SECTION 03"
          bottomTitle="1997 Christopher Fairbank0" pic="/gallery/d/5.png" size="w-full max-h-357px xl:(h-285px)"
          class="col-span-12 md:(col-span-3) !xl:(col-span-3 col-start-4 mt-10)" />
        <UiCard data-aos="fade-up-right" data-aos-duration="1500" bottomTitle="1997 Christopher Fairbank0"
          pic="/gallery/d/6.png" size="w-full max-h-357px xl:(h-285px)"
          class="col-span-12 md:(col-span-3) !xl:(col-span-3 mt-20)" />

        <!-- SECTION 04 -->
        <UiCard data-aos="fade-up-left" data-aos-duration="2000" topTitle="SECTION 04"
          bottomTitle="1997 Christopher Fairbank0" pic="/gallery/d/7.png" size="w-full max-h-357px xl:(h-605px)"
          class="col-span-12 md:(col-span-3) !xl:(col-span-9 col-start-4 mt-40)" />
      </div>
    </ClientOnly>
  </section>

  <!-- Contact Area -->
  <section id="contact" @mouseenter="isHover = true" @mouseleave="isHover = false"
    class="relative pt-15 pb-133px xl:(pt-15 pb-122px) w-full flex flex-col items-center justify-center gap-8 bg-black overflow-hidden cursor-none">
    <ClientOnly>
      <UiPageTittle data-aos="zoom-out" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom"
        title="Contact" color="text-white" mobSize="text-150px sm:text-200px" class="text-center whitespace-nowrap" />
      <a data-aos="zoom-out" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" href="tel:+339566789"
        aria-label="撥打電話 +339 566 789" class="mt-2 text-primary text-11 font-400 lh-90% decoration-none">+339 566
        789</a>
      <!-- img -->
      <div class="relative w-full h-276px xl:(px-15 w-1326px h-445px) 2xl:px-20 isolate">
        <img data-aos="zoom-in" data-aos-duration="1000" src="/contact/contain.png" alt="contact us"
          class="absolute left-0 top-0 z-1 w-full h-full object-cover">
        <img data-aos="zoom-out" data-aos-duration="1000" src="/contact/contain.png" alt="contact us"
          class="absolute left-0 top-0 z-2 w-full h-full object-cover mix-blend-exclusion">
        <UiPageTittle data-aos="fade-left" data-aos-duration="1200" data-aos-anchor-placement="bottom-bottom"
          title="CALL" color="text-white" mobSize="text-150px sm:text-200px"
          class="z-2 absolute -right-11 xl:-right-35 bottom-0 whitespace-nowrap" />
      </div>
    </ClientOnly>

    <!-- content -->
    <div class="mt-5 w-317px min-h-25 xl:(mt-0 w-474px)">
      <AnimationTypingText txtStyle="text-white text-center">
        Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem
        incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit
        tempor
        culpa.
      </AnimationTypingText>
    </div>

    <!-- Deco Words -->
    <ClientOnly>
      <UiPageTittle data-aos="fade-right" data-aos-duration="1200" data-aos-anchor-placement="bottom-bottom" title="ME"
        color="text-white" mobSize="text-150px sm:text-200px"
        class="absolute -left-8 xl:-left-10 bottom-0 whitespace-nowrap" />
    </ClientOnly>
  </section>

  <!-- Mouse Circle -->
  <div :style="{ left: `${circleX}px`, top: `${circleY}px` }"
    :class="[isHover ? 'scale-260 rounded-full transition-transform duration-400 ease-in-out' : 'scale-30 transition-transform duration-400 ease-in-out']"
    class="z-20 fixed w-20 h-20  mix-blend-difference bg-secondary-10 opacity-80 transform -translate-x-1/2 -translate-y-1/2 transition-all pointer-events-none" />
</template>