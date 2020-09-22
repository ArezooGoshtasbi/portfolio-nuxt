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
import MobileMenuHelper from '@/helpers/MobileMenuHelper'

export default {
  computed: {
    ...mapState('general', ['menu']),
  },
  methods: {
    ...mapMutations('general', ['setMenu']),
    onMobileMenuToggle() {
      MobileMenuHelper.mobileMenuToggle(this.menu, this.$store)
    },
  },
}
</script>
