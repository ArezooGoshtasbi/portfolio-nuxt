<template>
  <div class="skills">
    <VueSlickCarousel v-bind="settings">
      <img v-for="(image, index) in images" :key="index" :src="image" />
    </VueSlickCarousel>
  </div>
</template>

<script>
import cssImage from '@/assets/images/skills/css.png'
import htmlImage from '@/assets/images/skills/html.png'
import javascriptImage from '@/assets/images/skills/javascript.png'
import vueImage from '@/assets/images/skills/vue.png'
import nuxtImage from '@/assets/images/skills/nuxt.png'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      images: [vueImage, nuxtImage, javascriptImage, htmlImage, cssImage],
      settings: {
        dots: false,
        focusOnSelect: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 4,
        swipeToSlide: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
