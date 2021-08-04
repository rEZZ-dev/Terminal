<template>
  <div class="content">
    <Banner />
  </div>
</template>

<script>
export default {
  name: "Content",

  components: {
    Banner: () => import( '@/components/Banner'),
  }
}
</script>

<style scoped>

</style>
