<template>
  <div class="project-summary">
    <div>
      <div class="project-summary__image" :style="imageStyle" />
      <div class="project-summary__content">
        <span v-if="title" class="project-summary__title">{{ title }}</span>
        <span v-if="subTitle" class="project-summary__subtitle">
          {{ subTitle }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageStyle() {
      return { backgroundImage: `url(${this.image})` }
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
