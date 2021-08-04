<template>
  <section class="content">
    <Banner />
  </section>
</template>

<script>
export default {
  name: "Content",

  components: {
    Banner: () => import( '@/components/Banner'),
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 100px;
}
</style>
