<template>
  <div id="portfolio">
    <div class="container">
      <CarouselModule :list="projects" />
    </div>
  </div>
</template>

<script>
import CarouselModule from '@/components/carousel-module'
import shastImage from '@/assets/images/shast/4.png'

export default {
  components: {
    CarouselModule,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Shast',
          subTitle: 'PWA for Melli Bank',
          image: shastImage,
        },
        {
          id: 2,
          title: 'Title',
          subTitle: 'sub',
        },
        {
          id: 3,
          title: 'Title',
          subTitle: 'sub',
        },
        {
          id: 4,
          title: 'Title',
          subTitle: 'sub',
        },
        {
          id: 5,
          title: 'Title',
          subTitle: 'sub',
        },
        {
          id: 6,
          title: 'Title',
          subTitle: 'sub',
        },
      ],
    }
  },
}
</script>
