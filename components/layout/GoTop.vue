<script setup lang="ts">
const isVisible = ref<boolean>(false);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const onScroll = () => {
  isVisible.value = window.scrollY > 80;
};
onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll();
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
});
</script>

<template>
  <transition name="fade">
    <button v-if="isVisible" @click="scrollToTop" title="回到最上方"
      class="z-100 fixed right-30px bottom-20 md:(right-55px bottom-25) flex flex-col items-end gap-4px bg-transparent border-0 cursor-pointer focus-visible:outline-#E01111 group">
      <div
        class="w-15 h-15 rounded-full border-t-(1px solid primary) border-l-(1px solid primary/50) border-r-(1px solid primary/50) bg-gradient-to-b from-primary/80 to-primary-120/70  duration-300 group-hover:bg-primary-60/80">
      </div>
      <p class="absolute top-3 left-1/2 -translate-x-1/2 text-4 text-white font-bold tracking-wider">TOP</p>
      <div class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 -rotate-70deg">
        <div class="relative w-12 h-12 lg:(w-16 h-16) ">
          <!-- 箭頭 -->
          <span class="absolute block w-2 lg:w-2.4 h-1.5px bg-white origin-left rotate-10deg left-55% top-41%" />
          <!-- 箭身-->
          <span class="absolute block w-4.5 lg:w-6 h-1.5px bg-white origin-center -rotate-21deg left-34% top-51%" />
        </div>

      </div>
    </button>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>