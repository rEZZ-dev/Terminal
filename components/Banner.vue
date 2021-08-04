<template>
  <section class="banner">
    <ThemeButton />
  </section>
</template>

<script>
import { ref } from '@vue/composition-api'
import ThemeButton from '@/components/ThemeButton'

export default {
  components: {
    ThemeButton
  },

  setup() {
    const strings = ref(['Front-end', 'And', 'Backend', 'Developer'])

    return {
      strings
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 50px;


  &__title {
    color: $white;
    font-size: 8rem;
  }
}
</style>

