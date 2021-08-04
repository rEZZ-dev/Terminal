<template>
  <button @click="toggleTheme"></button>
</template>

<script>
import { ref } from "@vue/composition-api";

import uniqueID from "@/utils/uniqueId";
import { isMobile } from 'mobile-device-detect';

import Desktop from '@/components/menu/Desktop';
import Mobile from '@/components/menu/Mobile';

export default {
  components: {
    Desktop,
    Mobile
  },

  setup() {
    const userTheme = ref('light-theme')


    function toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        setTheme("dark-theme");
      } else {
        setTheme("light-theme");
      }
    }

    function setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      userTheme.value = theme;
      document.documentElement.className = theme;
    }

    return {
      userTheme,
      toggleTheme
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
