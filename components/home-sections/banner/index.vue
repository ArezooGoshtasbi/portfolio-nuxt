<template>
  <div class="banner dark" :style="bannerStyle">
    <div class="banner__middle">
      <div class="container">
        <div class="caption">
          <img src="" alt="" />
          <h1>{{ $t('home.banner.title') }}</h1>
          <h2>{{ $t('home.banner.description') }}</h2>
          <SocialMedia />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/images/banner-background.jpg'
import SocialMedia from './social-media'
export default {
  components: {
    SocialMedia,
  },
  computed: {
    bannerStyle() {
      return {
        backgroundImage: `url(${backgroundImage})`,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
@import "./style.scss";
</style>
