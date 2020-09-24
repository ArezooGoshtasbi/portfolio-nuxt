<template>
  <div class="container">
    <div class="title">{{ title }}</div>
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
    return {
      title: app.i18n.t(`projects.${id}.title`),
      content: app.i18n.t(`projects.${id}.content`),
      images: projects.find((project) => project.id === id).images,
    }
  },
}
</script>
