<template>
  <div>
    <Header />
      <Content />
    <Footer />
  </div>
</template>

<script>

export default {
  name: "Homepage",

  components: {
    Header: () => import( '@/components/layout/Header'),
    Content: () => import( '@/components/layout/Content'),
    Footer: () => import( '@/components/layout/Footer')
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Oxygen', sans-serif;
}
</style>
