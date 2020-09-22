<template>
  <div id="header" :class="containerClass">
    <div class="container">
      <div :class="innerClass">
        <div class="header__left"></div>
        <div class="header__middle">
          <div class="header__middle__menu"></div>
        </div>
        <div class="header__right">
          <MenuLinks
            :nav-items="rightMenuItems"
            active-on-scroll
            :has-mobile="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuLinks from '../menu-links'

export default {
  components: {
    MenuLinks,
  },
  props: {
    isSearch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPassed: false,
      rightMenuItems: [
        {
          href: '#about',
          text: 'header.links.about',
          id: 'about',
          internalLink: true,
        },
      ],
    }
  },
  computed: {
    containerClass() {
      return {
        header: true,
        'header-scroll': this.isPassed,
      }
    },
    innerClass() {
      return { header__inner: true }
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let el = document.getElementById('header')
      let top = el.offsetTop
      const height = el.offsetHeight

      while (el.offsetParent) {
        el = el.offsetParent
        top += el.offsetTop
      }

      this.isPassed = !(
        top >= window.pageYOffset &&
        top + height <= window.pageYOffset + window.innerHeight
      )
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
