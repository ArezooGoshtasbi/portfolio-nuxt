<template>
  <div class="menu-layout__mobile">
    <i id="open-menu" @click="onMobileMenuToggle">
      <img v-if="!menu" src="@/assets/images/menu.svg" />
      <img v-else src="@/assets/images/close.svg" />
    </i>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('general', ['menu']),
  },
  methods: {
    ...mapMutations('general', ['setMenu']),
    onMobileMenuToggle() {
      const root = document.getElementsByTagName('html')[0]
      const main = document.getElementsByTagName('main')[0]
      const body = document.body

      if (this.menu) {
        if (body) body.removeAttribute('style')
        if (root) root.removeAttribute('style')
        if (main) main.removeAttribute('style')
      } else {
        if (body) {
          body.style.overflow = 'hidden'
          body.style.height = '100%'
        }
        if (root) {
          root.style.overflow = 'hidden'
          root.style.height = '100%'
        }
        if (main) main.style.display = 'none'
      }
      this.setMenu(!this.menu)
    },
  },
}
</script>
