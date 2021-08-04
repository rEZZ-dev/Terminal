<template>
  <header>
    <nav class="menu">
      <ul class="items">
        <li v-for="item in  menu" :key="uniqueId" class="item">
          <nuxt-link :to="item.link">
            <h1 class="title" :class="{ 'isActive' : item.active }"> <span class="number" >{{ item.id }}.</span>{{ item.text }}</h1>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
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

    return {
      uniqueId,
      isMobile,
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  .logo {
    margin: 20px;

    img {
      max-width: 100px;
      width: 100%;
    }
  }

  .menu {
    .items {
      display: flex;
      align-content: center;
      justify-content: space-evenly;
      width: 100%;

      .item {
        margin: 25px;

        .title {
          position: relative;
          color: $white;
          text-transform: uppercase;
          font-size: 14px;

          &:after {
            content: "";
            position: absolute;
            top: 12px;
            left: -10px;
            width: 0;
            height: 5px;
            z-index: 99;
            background: $pink;
            transition: .5s width ease-in-out;
          }

          &.isActive  {
            &:after {
              content: "";
              position: absolute;
              top: 12px;
              left: -10px;
              width: calc(100% + 20px);
              height: 5px;
              z-index: 99;
              background: $pink;
              transition: .5s width ease-in-out;
            }
          }
        }

        .number {
          font-size: 18px;
          color: $pink;
          transition: font-size .7s;
        }

        &:hover{
          .title {
            &:after {
              width: calc(100% + 20px);
            }
          }
        }
      }
    }

  }
}
</style>
