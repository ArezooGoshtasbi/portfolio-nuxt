<template>
  <div :class="containerClass">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div :class="innerClass">
            <div class="header__left"></div>
            <div class="header__middle">
              <div class="header__middle__menu"></div>
            </div>
            <div class="header__right">
              <MenuLinks :nav-items="rightMenuItems" :has-mobile="true" />
            </div>
          </div>
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
      rightMenuItems: [
        {
          href: '#about',
          text: 'header.links.about',
          class: '',
          internalLink: false,
        },
      ],
    }
  },
  computed: {
    containerClass() {
      return {
        header: true,
      }
    },
    innerClass() {
      return { header__inner: true }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
