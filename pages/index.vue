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
    Header: () => import( '@/layout/Header'),
    Content: () => import( '@/layout/Content'),
    Footer: () => import( '@/layout/Footer')
  }
}
</script>
