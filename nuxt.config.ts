export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: [
    '@unocss/reset/eric-meyer.css',
    '@/assets/stylesheets/reset.css',
    '@/assets/stylesheets/noise.css',
    '@/assets/stylesheets/transition.css',
    'aos/dist/aos.css',
  ],
  modules: [
    '@unocss/nuxt',
  ],
  devtools: { enabled: false }
})
