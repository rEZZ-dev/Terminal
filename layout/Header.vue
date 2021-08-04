<template>
  <header>
    <Desktop :menu="menu" v-if="!isMobile" />
    <Mobile :menu="menu" v-else />
  </header>
</template>

<script>
import { ref } from "@vue/composition-api";

import uniqueID from "@/utils/uniqueId";
import { isMobile } from 'mobile-device-detect';

import Desktop from '@/components/menu/Desktop';
import Mobile from '@/components/menu/Mobile';

export default {
  components: {
    Desktop,
    Mobile
  },

  setup() {
    const { uniqueId } = uniqueID();
    const menu = ref([
      {
        id: '01',
        text: 'begin',
        link: '/',
        active: true
      },
      {
        id: '02',
        text: 'about',
        link: '/',
        active: false
      },
      {
        id: '03',
        text: 'work',
        link: '/',
        active: false
      },
      {
        id: '04',
        text: 'hire me',
        link: '/',
        active: false
      }
    ])

    return {
      uniqueId,
      isMobile,
      menu
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
