<template>
  <a class="skill-card" :href="link" target="_blank">
    <div>
      <div class="skill-card__image" :style="imageStyle" />
      <div class="skill-card__content">
        <span v-if="title" class="skill-card__title">{{ title }}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ProjectSummary',
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
    link: {
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
