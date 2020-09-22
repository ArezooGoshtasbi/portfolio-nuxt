<template>
  <fragment>
    <div :class="containerClass">
      <nav class="menu-layout__nav">
        <ul>
          <li
            v-for="(item, index) in navItems"
            :id="'link' + item.id"
            :key="index"
            :class="{ active: item.id === activeLink }"
            @click="onLinkClick"
          >
            <a v-if="item.internalLink" @click="navigateTo(item.href)">
              <span> {{ $t(item.text) }}</span>
            </a>
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
import ScrollHelper from '@/helpers/ScrollHelper'
import MobileMenuHelper from '@/helpers/MobileMenuHelper'

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
    activeOnScroll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      SOCIAL_LINKS,
      activeLink: null,
    }
  },
  computed: {
    ...mapState('general', ['menu', 'setMenu']),
    containerClass() {
      return {
        'menu-layout': true,
        opened: this.menu,
      }
    },
  },
  mounted() {
    if (this.activeOnScroll)
      document.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    if (this.activeOnScroll)
      document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const elementsInViewArray = this.navItems.map((item) => {
        if (ScrollHelper.isFullyInViewport(item.id)) {
          return item.id
        }
      })
      if (!elementsInViewArray) return
      this.activeLink = elementsInViewArray.find((id) => id)
    },
    onLinkClick() {
      MobileMenuHelper.mobileMenuToggle(true, this.$store)
    },
    navigateTo(href) {
      setTimeout(() => {
        this.$router.push(href)
      }, 200)
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
