<template>
  <div>
    <Content />
  </div>
</template>

<script>
import Kursor from 'kursor'
import Content from '../components/structure/Content'

export default {
  components: {
    Content
  },

  mounted() {
    const mouse = new Kursor({
      type: 2,
      color: 'rgb(255,214,0)',
      removeDefaultCursor: true
    })

    console.log(mouse)
  }
}
</script>
