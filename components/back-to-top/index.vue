<template>
  <div
    v-if="visible"
    class="button-top"
    data-scroll-nav="0"
    @click="scrollToTop"
  >
    <span>
      <img src="@/assets/images/back-to-top.svg" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    scrollStepInPx: {
      type: Number,
      default: 50,
    },
    delayInMs: {
      type: Number,
      default: 16.66,
    },
  },
  data() {
    return {
      visible: false,
      intervalId: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.visible = true
      } else {
        this.visible = false
      }
    })
  },
  methods: {
    scrollStep() {
      if (window.pageYOffset === 0) clearInterval(this.intervalId)
      const destY = window.pageYOffset - this.scrollStepInPx
      window.scroll(0, destY)
    },
    scrollToTop() {
      window.scroll(0, window.pageYOffset - this.scrollStepInPx)
      this.intervalId = setInterval(this.scrollStep.bind(this), this.delayInMs)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
