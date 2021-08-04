<template>
  <section class="banner">
    <h1>Hi, my name is:</h1>
    <vue-typer :text="['Hello World! I was registered globally!', '2312gistered globally!']"></vue-typer>

  </section>
</template>

<script>
import { defineComponent, computed, ref } from '@vue/composition-api'

export default {
  name: "Banner",

}
</script>

<style scoped>

</style>
