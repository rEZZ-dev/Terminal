<template>
  <div class='footer'>
    <a href='https://github.com/rEZZ-dev' target='_blank'>
      <Github class='footer__icons' />
    </a>

    <a href='https://instagram.com/fabiommfernandes' target='_blank'>
      <Instagram class='footer__icons' />
    </a>

    <a href="mailto:dev@fabiofernandes.pt">
      <Contact class='footer__icons' />
    </a>
  </div>
</template>

<script>
import Github from '../svg/Github'
import Instagram from '../svg/Instagram'
import Contact from '../svg/Contact'

export default {
  name: 'Footer',

  components: {
    Github,
    Instagram,
    Contact
  }
}
</script>

<style lang='scss'>
.footer {
  width: 100%;
  text-align: center;

  margin-top: 50px;

  position: absolute;
  bottom: 0;


  &__icons {
    width: 50px;
    height: 50px;

    fill: #171616;

    cursor: pointer;

    transition: all .3s linear;

    &:hover {
      fill: #FFFFFF;
    }
  }

}
</style>
