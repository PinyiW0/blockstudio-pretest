<script lang="ts" setup>
/** @const open menu */
const openMenu = ref<boolean>(false);
/** @const 是否為手機版 */
const isMob = ref<boolean>(false);

interface MenuItem {
  label: string;
  domId?: string;
  decoLine?: boolean;
  icon?: string;
};

const menuList: MenuItem[] = [
  { label: 'About', domId: 'about' },
  { label: 'Story', domId: 'story' },
  { label: 'Gallery', domId: 'gallery' },
  { label: '', decoLine: true },
  { label: 'Contact', domId: 'contact', icon: 'i-line-md:phone' },
];

/** 錨點效果 */
const handleScrollTo = (domId: string, isMob: boolean) => {
  const menuItem = menuList.find(item => item.domId === domId);
  if (!menuItem) return;
  if (!domId) return;
  const el = document.getElementById(domId);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
  if (isMob) openMenu.value = false;
};
</script>

<template>
  <header
    class="relative fixed top-0 z-60 left-0 w-full h-16 lg:h-23.5 px-3 lg:px-20 py-4 flex items-center justify-between bg-black">
    <div class="mt-4 px-6 lg:(mt-8 px-69px) w-full flex items-center justify-between bg-black">
      <!-- logo -->
      <div class="w-21.5 h-7 lg:h-10 overflow-hidden group">
        <NuxtLink to="/"
          class="w-21.5 h-7 lg:h-10 flex flex-col gap-4 cursor-pointer block transform transition-transform duration-300 ease-in-out group-hover:-translate-y-11.5">
          <img src="/logo/logo-light.svg" alt="ZOENW" class="w-fit h-fit object-contain">
          <img src="/logo/logo-green.svg" alt="ZOENW" class="w-fit h-fit object-contain">
        </NuxtLink>
      </div>
      <!-- web menu list -->
      <div class="hidden lg:block py-5 px-10 bg-secondary-10 rounded-full">
        <ul class="ml-auto list-none flex items-center gap-10">
          <li @click="item.domId && handleScrollTo(item.domId, isMob = false)" v-for="(item, idx) in menuList"
            :key="idx" class="relative group">
            <div v-if="item.decoLine" class="w-6 h-px bg-secondary transform translate-y-2.5 rotate-110deg" />
            <div class="overflow-hidden h-5">
              <div
                class="flex flex-col gap-1 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
                <div class="flex items-center gap-1">
                  <i v-if="item.icon" :class="item.icon" class="h-4 w-4 text-current group-hover:opacity-0" />
                  <p class="text-4 text-black fw-600 cursor-pointer group-hover:opacity-0">{{ item.label }}</p>
                </div>
                <div class="flex items-center gap-1">
                  <i v-if="item.icon" :class="item.icon" class="h-4 w-4 text-primary-green" />
                  <p class="text-4 text-primary-green fw-600 cursor-pointer">{{ item.label }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- mob menu list -->
      <transition name="slide-down">
        <div @click="openMenu = false" v-if="openMenu"
          class="block lg:hidden absolute top-0 right-0 z-10 w-full h-100dvh bg-black/60 backdrop-blur" />
      </transition>
      <transition name="fade">
        <ul v-if="openMenu"
          class="z-20 px-5 w-full h-screen fixed inset-0 flex flex-col items-center justify-center gap-5">
          <li v-for="(item, idx) in menuList" :key="idx" class="py-4 w-full list-none flex items-center justify-center">
            <div v-if="item.decoLine" class="w-6 h-px bg-secondary transform translate-y-2.5 rotate-[110deg]" />
            <div @click="handleScrollTo(item.domId!, isMob = true)"
              class="flex items-center justify-center gap-1 group">
              <i v-if="item.icon" :class="item.icon"
                class="mt-1.5 h-6 w-6 text-white duration-300 group-hover:text-primary-green" />
              <p class="text-6 text-white fw-600 cursor-pointer duration-300 group-hover:text-primary-green">
                {{ item.label }}
              </p>
            </div>
          </li>
        </ul>
      </transition>
      <!-- mob menu icon -->
      <div @click="openMenu = !openMenu"
        class="block lg:hidden z-60 absolute top-4 right-7 p-4 bg-secondary-10 rounded-18 cursor-pointer hover:bg-primary-green">
        <div class="w-auto h-full flex flex-col justify-center gap-1.5">
          <div :class="{ 'w-7 h-3px rotate-45 translate-y-1.5 rounded-0': openMenu }"
            class="w-5 h-px bg-black duration-400" />
          <div :class="{ 'opacity-0': openMenu }" class="w-5 h-px bg-black duration-400" />
          <div :class="{ 'w-7 h-3px -rotate-45 -translate-y-2 rounded-0': openMenu }"
            class="ml-auto w-3 h-px bg-black duration-400" />
        </div>
      </div>
    </div>
  </header>
</template>