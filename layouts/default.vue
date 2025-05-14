<script setup lang="ts">
const isLoading = useState<boolean>('isLoading', () => false);
onMounted(() => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
});
</script>

<template>
  <BaseLoading />
  <div class="w-full overflow-x-hidden">
    <LayoutHeader />
    <main>
      <NuxtPage />
    </main>
    <LayoutFooter />
    <LayoutGoTop />
  </div>
</template>