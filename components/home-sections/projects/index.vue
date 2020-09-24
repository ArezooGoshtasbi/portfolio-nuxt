<template>
  <div id="portfolio">
    <div class="container">
      <CarouselModule :list="projects" />
    </div>
  </div>
</template>

<script>
import CarouselModule from '@/components/carousel-module'
import projects from '@/constants/projects'

export default {
  components: {
    CarouselModule,
  },
  data() {
    return {
      projects,
    }
  },
}
</script>
