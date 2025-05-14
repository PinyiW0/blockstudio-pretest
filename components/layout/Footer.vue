<script lang="ts" setup>
</script>

<template>
  <footer class="pt-10 pb-10 px-20.5 lg:(py-17.5 px-15) w-full bg-secondary-10">
    <div class="flex flex-col items-center space-y-6 lg:(flex-row justify-between items-center space-y-0)">
      <div
        class="order-2 mt-7 w-full text-center lg:(order-1 mt-0 w-1/3 text-left justify-start) flex items-center justify-center gap-3">
        <NuxtLink to="/"
          class="text-primary text-3.5 font-light decoration-none duration-300 cursor-pointer hover:text-primary-green">
          Privacy Policy
        </NuxtLink>
        <div class="w-4 h-px bg-primary transform translate-y-0.7 rotate-110deg" />
        <NuxtLink to="/"
          class="text-primary text-3.5 font-light decoration-none duration-300 cursor-pointer hover:text-primary-green">
          Brand Site
        </NuxtLink>
      </div>

      <!-- logo -->
      <div class="order-1 w-full text-center lg:(h-10 w-1/3 order-2) flex justify-center overflow-hidden group">
        <NuxtLink to="/"
          class="w-21.5 h-7 lg:h-10 flex flex-col gap-4 cursor-pointer inline-block transform transition-transform duration-300 ease-in-out group-hover:-translate-y-11.5">
          <img src="/logo/logo-red.svg" alt="ZOENW" class="w-fit h-fit object-contain">
          <img src="/logo/logo-green.svg" alt="ZOENW" class="w-fit h-fit object-contain">
        </NuxtLink>
      </div>
      <!-- words -->
      <p
        class="order-3 !mt1 w-full text-center lg:(w-1/3 text-right) text-primary text-3.5 font-light whitespace-nowrap">
        © original COSME JAPAN CO.,LTD
      </p>
    </div>
  </footer>
</template>