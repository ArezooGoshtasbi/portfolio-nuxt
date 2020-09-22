<template>
  <fragment>
    <div :class="containerClass">
      <nav class="menu-layout__nav">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <nuxt-link v-if="item.internalLink" :to="item.href">
              <span> {{ $t(item.text) }}</span>
            </nuxt-link>
            <a v-else :href="item.href">
              <span> {{ $t(item.text) }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="menu-layout__social-links">
        <div>
          <a :href="SOCIAL_LINKS.LINKEDIN" target="_blank">
            <img src="@/assets/images/linkedin.svg" />
          </a>
        </div>
      </div>
    </div>
    <Mobile v-if="hasMobile" />
  </fragment>
</template>

<script>
import SOCIAL_LINKS from '@/constants/social-links.js'
import { mapState } from 'vuex'

export default {
  props: {
    navItems: {
      type: Array,
      default() {
        return []
      },
    },
    hasMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      SOCIAL_LINKS,
    }
  },
  computed: {
    ...mapState('general', ['menu']),
    containerClass() {
      return {
        'menu-layout': true,
        opened: this.menu,
      }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
