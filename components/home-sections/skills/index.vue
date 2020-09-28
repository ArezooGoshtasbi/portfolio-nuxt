<template>
  <div id="skills">
    <div class="container">
      <div class="section-head wow zoomIn">
        <h3>{{ $t('home.skills.title') }}</h3>
      </div>
      <VueSlickCarousel v-bind="settings">
        <SkillCard
          v-for="(skill, index) in skills"
          :key="index"
          :title="skill.title"
          :image="skill.image"
          :link="skill.link"
        />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import cssImage from '@/assets/images/skills/css.png'
import htmlImage from '@/assets/images/skills/html.png'
import javascriptImage from '@/assets/images/skills/javascript.png'
import vueImage from '@/assets/images/skills/vue.png'
import nuxtImage from '@/assets/images/skills/nuxt.png'

import VueSlickCarousel from 'vue-slick-carousel'
import SkillCard from '@/components/skill-card'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel, SkillCard },
  data() {
    return {
      skills: [
        {
          title: 'Vue.js',
          image: vueImage,
          link: 'https://vuejs.org/',
        },
        {
          title: 'Nuxt.js',
          image: nuxtImage,
          link: 'https://nuxtjs.org/',
        },
        {
          title: 'JavaScript',
          image: javascriptImage,
          link: 'https://www.javascript.com/',
        },
        {
          title: 'HTML',
          image: htmlImage,
          link: 'https://html.com/',
        },
        {
          title: 'CSS',
          image: cssImage,
          link: 'https://css-tricks.com/',
        },
      ],
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
