<template>
  <div class="home-page">
    <Banner />
    <About />
    <Projects />
  </div>
</template>

<script>
import Banner from '@/components/home-sections/banner'
import About from '@/components/home-sections/about'
import Projects from '@/components/home-sections/projects'

export default {
  components: {
    Banner,
    About,
    Projects,
  },
}
</script>
