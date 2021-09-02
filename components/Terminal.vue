<template>
  <div class='terminal'>
    <section class='terminal__header'>
      <h1 class='terminal__header__title'>rezz@pop-os</h1>
      <div class='terminal__header__close'>&#10005;</div>
    </section>

    <section class='terminal__body'>
      <fa icon="faGithub" />
    </section>
  </div>
</template>

<script>

export default {
}
</script>


<style lang='scss'>
.terminal {
  height: 500px;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.67);

  position: relative;

  &__header {
    width: 100%;
    height: 40px;
    background-color: #171616;

    display: flex;
    align-items: center;

    text-align: center;

    &__title {
      width: calc(100% - 15px);
      font-size: 12px;
      color: #FFFFFF;
      font-family: Ubuntu;
    }

    &__close {
      width: 15px;
      height: 15px;
      background: #942d2d;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;

      font-weight: bold;
      font-size: 10px;
      color: #000000;

      margin-right: 10px;

      cursor: pointer;

      transition: all .1s ease-in-out;

     &:hover {
       transform: scale(1.1)
     }
    }
  }

  &__body {
    margin-top: 40px;
    margin-left: 10px;
  }
}
</style>
