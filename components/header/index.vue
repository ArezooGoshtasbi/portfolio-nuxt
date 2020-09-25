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
            :active-on-scroll="activeOnScroll"
            :has-mobile="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MenuLinks from '../menu-links'

export default {
  components: {
    MenuLinks,
  },
  props: {
    isHome: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
      default: '',
    },
    activeOnScroll: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isPassed: false,
      rightMenuItems: this.isHome
        ? [
            {
              href: '#about',
              text: 'header.links.about',
              id: 'about',
              internalLink: true,
            },
            {
              href: '#fields',
              text: 'header.links.fields',
              id: 'fields',
              internalLink: true,
            },
            {
              href: '#portfolio',
              text: 'header.links.portfolio',
              id: 'portfolio',
              internalLink: true,
            },
          ]
        : [
            {
              href: this.locale ? '/' + this.locale : '/',
              text: 'header.links.home',
              id: 'home',
              internalLink: true,
            },
          ],
    }
  },
  computed: {
    ...mapState('general', ['locale']),
    containerClass() {
      const classes = {
        header: true,
        'header-scroll': this.isPassed,
      }
      classes[this.className] = true
      return classes
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

<style lang="scss" scoped>
@import './style.scss';
</style>
