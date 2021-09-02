<template>
  <div class='content'>
    <Terminal />
  </div>
</template>

<script>
import Terminal from '@/components/Terminal.vue'

export default {
  components: {
    Terminal
  }
}
</script>

<style lang='scss'>
.content {
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
