import AOS from 'aos';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    AOS.init();
  }
});