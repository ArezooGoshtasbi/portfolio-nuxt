<template>
  <div class="carousel-module">
    <div class="carousel-module__container">
      <div class="carousel-module__items">
        <div ref="carousel" class="carousel-module__carousel">
          <slot />
        </div>
      </div>

      <Next
        v-if="loaded && nextActive"
        :class-name="'carousel-module__arrow r'"
        @next="goPrexOrNext"
      />
      <Prev
        v-if="loaded && prevActive"
        :class-name="'carousel-module__arrow l'"
        @prev="goPrexOrNext"
      />
    </div>
  </div>
</template>

<script>
import Prev from './Previous'
import Next from './Next'

export default {
  name: 'FullCarousel',
  components: {
    Next,
    Prev,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      current: 0,
      loaded: false,
    }
  },
  computed: {
    prevActive() {
      const size = this.getItemSize()
      return this.list.length > size && this.current > 0 && size > 2
    },
    nextActive() {
      const size = this.getItemSize()
      return (
        this.list.length > size &&
        this.list.length - size > this.current &&
        size > 2
      )
    },
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    getItemSize() {
      let size = 5
      const innerW = window.innerWidth
      if (innerW < 1200 && innerW > 992) {
        size = 4
      } else if (innerW < 992 && innerW > 768) {
        size = 3
      } else if (innerW < 768) {
        size = 2
      }
      return size
    },
    goPrexOrNext(isPrev = true) {
      const size = this.getItemSize()
      const itemW = 100 / size
      if (this.$refs.carousel) {
        if (isPrev) {
          const current = this.current - 1
          this.$refs.carousel.style = `transform: translateX(-${
            current * itemW
          }%)`
          this.current = current
        } else {
          const current = this.current + 1
          this.$refs.carousel.style = `transform: translateX(-${
            current * itemW
          }%)`
          this.current = current
        }
      }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
