<template>
  <div class="main">
    <vue-draggable-resizable
      v-if="showTerminal"
      :resizable="false"
      @dragging="onDrag"
    >
      <div class="terminal">
        <section class="terminal__header">
          <h1 class="terminal__header__title">rezz@pop-os</h1>
          <div class="terminal__header__close" @click="showTerminal = false">
            &#10005;
          </div>
        </section>

        <section class="terminal__info">
          <span>commands:</span>

          <ul>
            <li>clear (clear console)</li>
            <li>download (download my cv)</li>
            <!---<li>about (about me)</li>
            <li>projects (all of my projects)</li>-->
            <li>contact me (my social networks)</li>
          </ul>

          <p class="terminal__info__comment">
            <span>/* This website is still under construction</span> <br />
            <span>Some things may not work as expected */</span>
          </p>
        </section>

        <section class="terminal__body">
          <div>
            <div v-for="index in lines" :key="index">
              <div class="terminal__inputs">
                <div class="terminal__start">
                  <font-awesome-icon
                    class="terminal__body__begin__icon"
                    :icon="['fas', 'home']"
                  />
                  ~
                </div>
                <div :key="'inputs' + index" style="margin-top: 10px">
                  <input
                    :ref="'input-' + index"
                    v-model="inputContent[index]"
                    :disabled="index !== activeLine"
                    type="text"
                    class="terminal__input"
                    @keyup.enter="onEnter"
                  />
                </div>
              </div>

              <section
                v-if="
                  showContent &&
                  showContent.text === 'contact me' &&
                  showContent.line === index
                "
                class="terminal__social"
              >
                <span>my social:</span>

                <ul>
                  <li>
                    <a href="https://github.com/rEZZ-dev" target="_blank">
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/fabiommfernandes"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li><a href="mailto:dev@fabiofernandes.pt"> email me </a></li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
    </vue-draggable-resizable>
    <span
      v-if="!showTerminal"
      class="terminal__open"
      @click="showTerminal = true"
      >Open Terminal</span
    >
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: 'Terminal',

  components: {
    VueDraggableResizable,
  },

  data() {
    return {
      x: 0,
      y: 0,
      lines: 1,
      activeLine: 1,
      inputContent: [],
      showContent: null,
      showTerminal: true,
    }
  },

  mounted() {
    this.focusInput()
  },

  methods: {
    onDrag(x, y) {
      this.x = x
      this.y = y
    },

    focusInput() {
      this.$nextTick(() => {
        this.$refs[`input-${this.activeLine}`][0].focus()
      })
    },

    onEnter() {
      const value = this.inputContent[this.activeLine]
        .toLowerCase()
        .replace(' ', '')

      if (value === 'clear') {
        Object.assign(this.$data, this.$options.data.apply(this))
      } else if (value === 'download') {
        this.downloadFile()
        this.addInputLine()
      } else if (value === 'contact' || value === 'contactme') {
        this.showContent = {
          line: this.activeLine,
          text: 'contact me',
        }
        this.addInputLine()
      } else {
        this.addInputLine()
      }

      this.focusInput()
    },

    addInputLine() {
      this.lines += 1
      this.activeLine += 1
      this.focusInput()
    },

    downloadFile() {
      const a = document.createElement('a')
      a.href = `${process.env.APP_URL}F%C3%A1bio__Fernandes.pdf`
      a.setAttribute('download', 'Fábio__Fernandes.pdf')
      a.click()
    },
  },
}
</script>

<style lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;

  .terminal {
    height: 500px;
    width: 600px;
    background-color: rgba(0, 0, 0, 0.67);

    position: relative;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
      height: 100vh;
      width: 100%;
    }

    &__header {
      position: fixed;
      width: 600px;
      height: 40px;
      background-color: #171616;

      z-index: 10;

      display: flex;
      align-items: center;

      text-align: center;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      &__title {
        width: calc(100% - 15px);
        font-size: 12px;
        color: #ffffff;
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

        transition: all 0.1s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    &__body {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      &__begin {
        &__icon {
          color: #942d2d;
          font-size: 10px;

          height: 15px;
          margin-right: 5px;
        }
      }
    }

    &__start {
      background-color: white;
      position: relative;

      margin-top: 10px;
      padding-left: 10px;

      width: 30px;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      &:after {
        content: '';
        position: absolute;

        width: 0;
        height: 0;

        bottom: 0;
        right: -12px;

        border-top: 10px solid transparent;
        border-left: 12px solid white;
        border-bottom: 10.5px solid transparent;
      }
    }

    &__input {
      background: transparent;
      border: none;

      font-family: Ubuntu;
      color: #ffffff;
      outline: none;

      margin-left: 20px;
    }

    &__inputs {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__info {
      color: #ffffff;
      padding-top: 50px;

      &__comment {
        color: grey;
        font-style: italic;
        font-size: 12px;
      }
    }

    &__social {
      color: #ffffff;
    }

    &__open {
      background-image: linear-gradient(
        to right,
        #16a085 0%,
        #f4d03f 51%,
        #16a085 100%
      );
      margin: 10px;
      padding: 15px 45px;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      border-radius: 10px;
      display: block;

      cursor: pointer;

      &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
