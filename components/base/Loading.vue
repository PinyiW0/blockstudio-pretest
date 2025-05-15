<script lang="ts" setup>
const show = useState<boolean>('isLoading', () => false)
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="show" @wheel.prevent @touchmove.prevent @keydown.prevent
        class="z-100 fixed inset-0 bg-black flex items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-7">
          <img src="/logo/logo-red.svg" alt="ZOENW" class="w-fit h-fit object-contain">
          <div class="relative w-35 h-2px bg-white">
            <div class="animate-progress absolute left-0 top-0 w-35 h-2px bg-primary" />
          </div>
          <ClientOnly>
            <AnimationDecoLightDot position="-left-70 bottom-0" direction="ccw" path="w-300 h-200" />
            <AnimationDecoLightDot position="-right-20 top-40" size="w-20 h-20" direction="cw" path="w-300 h-50" />
            <AnimationDecoLightDot position="right-20 bottom-0" size="w-20 h-20" direction="cw" path="w-300 h-50" />
            <AnimationDecoLightDot position="-left-20 top-40" size="w-20 h-20" direction="ccw" path="w-300 h-150" />
            <AnimationDecoLightDot position="right-20 bottom-0" size="w-80 h-80" direction="cw" path="w-100 h-300" />
          </ClientOnly>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
@keyframes progress {
  0% {
    width: 0%;
  }

  50% {
    width: 50%;
  }

  100% {
    width: 100%;
  }
}

.animate-progress {
  animation: progress 1.5s linear infinite;
}
</style>