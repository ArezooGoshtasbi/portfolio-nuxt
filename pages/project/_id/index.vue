<template>
  <div class="container">
    <h3 class="title">{{ title }}</h3>
    <div class="content">{{ content }}</div>
    <projectImageViewer :images="images" />
  </div>
</template>

<script>
import projectImageViewer from '@/components/project-image-viewer'
import projects from '@/constants/projects'

export default {
  components: {
    projectImageViewer,
  },
  layout: 'project',
  asyncData({ app, params }) {
    const id = params.id
    const images = projects.find((project) => project.id === id)
      ? projects.find((project) => project.id === id).images
      : []
    return {
      title: app.i18n.t(`projects.${id}.title`),
      content: app.i18n.t(`projects.${id}.content`),
      images,
      titleHead: id + ' ' + app.i18n.t('head.project.title'),
      htmlAttrs: {
        lang: params.lang ? params.lang : 'en',
      },
    }
  },
  head() {
    return { title: this.titleHead, htmlAttrs: this.htmlAttrs }
  },
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
