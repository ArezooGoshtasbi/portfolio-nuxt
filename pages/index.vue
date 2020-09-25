<template>
  <div class="home-page">
    <Banner />
    <About />
    <Skills />
    <Projects />
  </div>
</template>

<script>
import Banner from '@/components/home-sections/banner'
import About from '@/components/home-sections/about'
import Projects from '@/components/home-sections/projects'
import Skills from '@/components/home-sections/skills'

export default {
  components: {
    Banner,
    About,
    Projects,
    Skills,
  },
  asyncData({ app, params }) {
    return {
      title: app.i18n.t('head.home.title'),
      htmlAttrs: {
        lang: params.lang ? params.lang : 'en',
      },
    }
  },
  head() {
    return { title: this.title, htmlAttrs: this.htmlAttrs }
  },
}
</script>
