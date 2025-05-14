<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
});
/** 標記是否為外部連結 */
const isExternal: any = computed(() => props.to && props.to.indexOf('http') > -1);

/** 是網頁連結時另開分頁 */
const setTarget = computed(() => {
  return (props.to && props.to.indexOf('http') > -1) ? '_blank' : '_self';
});
</script>

<template>
  <NuxtLink v-if="to" :to="to" :external="isExternal" :target="setTarget">
    <div class="overflow-hidden h-5">
      <div class="flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-4.5">
        <p class="text-4 text-primary-green font-400 leading-120% uppercase duration-300 group-hover:(text-#F2EEE6)">
          {{ title }}
        </p>
        <p class="text-4 text-primary-green font-400 leading-110% uppercase duration-300 group-hover:(text-#F2EEE6)">
          {{ title }}
        </p>
      </div>
    </div>
    <!-- 第一圈 -->
    <div class="absolute inset-0 px-3 rounded-full border-(0.5px solid #F2EEE6)
        opacity-0 scale-1 transition-all duration-500 ease-out
        group-hover:(opacity-100 scale-y-[1.4] scale-x-[1.2])
        disabled:opacity-0
      " />
    <!-- 第二圈-->
    <div class="absolute inset-0 px-3 rounded-full border-(0.5px solid primary-green) 
        opacity-0 scale-1 transition-all duration-500 ease-out
        [transition-delay:200ms]
        group-hover:(opacity-100 scale-y-[1.4] scale-x-[1.2])
        disabled:opacity-0
      " />
  </NuxtLink>

  <button v-else :aria-label="title" :disabled="disabled"
    class="relative py-3 px-5 w-fit bg-secondary-10 border-0 rounded-full cursor-pointer duration-300 group hover:(bg-primary-green) disabled:( text-white bg-gray-30 cursor-not-allowed)">
    <div class="overflow-hidden h-5">
      <div class="flex flex-col transform transition-transform duration-300 ease-in-out group-hover:-translate-y-4.5">
        <p class="text-4 text-primary-green font-400 leading-120% uppercase duration-300 group-hover:(text-#F2EEE6)">
          {{ title }}
        </p>
        <p class="text-4 text-primary-green font-400 leading-110% uppercase duration-300 group-hover:(text-#F2EEE6)">
          {{ title }}
        </p>
      </div>
    </div>
    <!-- 第一圈 -->
    <div class="absolute inset-0 px-3 rounded-full border-(0.5px solid #F2EEE6)
        opacity-0 scale-1 transition-all duration-500 ease-out
        group-hover:(opacity-100 scale-y-[1.4] scale-x-[1.2])
        disabled:opacity-0
      " />
    <!-- 第二圈-->
    <div class="absolute inset-0 px-3 rounded-full border-(0.5px solid primary-green) 
        opacity-0 scale-1 transition-all duration-500 ease-out
        [transition-delay:200ms]
        group-hover:(opacity-100 scale-y-[1.4] scale-x-[1.2])
        disabled:opacity-0
      " />
  </button>
</template>