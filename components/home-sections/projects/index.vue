<template>
  <div id="portfolio">
    <div class="container">
      <h3>{{ $t('home.portfolio.title') }}</h3>
      <CarouselModule :list="projects">
        <nuxt-link
          v-for="item in projects"
          :key="item.id"
          class="carousel-module__item"
          :to="`/project/${item.id}`"
        >
          <ProjectSummary
            :title="item.title"
            :sub-title="item.subTitle"
            :image="item.image"
          />
        </nuxt-link>
      </CarouselModule>
    </div>
  </div>
</template>

<script>
import CarouselModule from '@/components/carousel-module'
import projects from '@/constants/projects'
import ProjectSummary from '@/components/project-summary'

export default {
  components: {
    CarouselModule,
    ProjectSummary,
  },
  data() {
    return {
      projects,
    }
  },
}
</script>
