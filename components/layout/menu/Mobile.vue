<template>
  <div class="device">
    <div class="container">
      <button id="burger" class="open-main-nav">
        <span class="burger"></span>
        <span class="burger-text">Menu</span>
      </button>
      <nav class="main-nav" id="main-nav">
        <ul>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Speaker &amp; Writer</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <p class="notice">Design Copyright <strong>Stéphanie Walter</strong><br><a href="https://stephaniewalter.design/" target="_blank">StephanieWalter.Design</a></p>
    </div>
  </div>
</template>

<script>
import uniqueID from "@/utils/uniqueId";
import { isMobile } from 'mobile-device-detect';

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const { uniqueId } = uniqueID();
    const isOpen  = false;

    return {
      uniqueId,
      isMobile,
      isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  .open-main-nav {
    position: absolute;
    top: 50px;
    right: 30px;
    z-index: 1000;
    background: none;
    border: 0;
    cursor: pointer;

    .burger {
      position: relative;
      display: block;
      width: 28px;
      height: 4px;
      margin: 0 auto;
      background: $pink;
      transform: skew(5deg);
      transition: all .275s;

      &:after, &:before {
        content: '';
        display: block;
        height: 100%;
        background: $pink;
        transition: all .275s;
      }

      &:after {
        transform: translateY(-12px) translateX(-2px) skew(-20deg);
      }

      &:before {
        transform: translateY(-16px) skew(-10deg);
      }
    }
  }

  .is-open {
    .burger {
      transform: skew(5deg) translateY(-8px) rotate(-45deg);

      &:before {
        transform: translateY(0px) skew(-10deg) rotate(75deg);
      }

      &:after {
        transform: translateY(-12px) translateX(10px) skew(-20deg);
        opacity: 0;
      }
    }
  }

  .menu {

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -15px;
      background: #FEDC2A;
      transform-origin: 0 0;
      transform: skew(-14deg) translateX(-120%);
      transition: all .275s .1s;
    }

  }

}
</style>
