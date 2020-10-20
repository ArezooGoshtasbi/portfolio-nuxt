<template>
  <div class="project-image-viewer-container">
    <Viewer
      v-if="images && images.length"
      ref="viewer"
      :options="options"
      :images="images"
      class="viewer"
      @inited="inited"
    >
      <img
        v-for="(source, index) in images"
        :key="index"
        :src="source"
        :data-source="source"
        class="hidden"
      />
    </Viewer>
    <CarouselModule :list="images">
      <div
        v-for="(src, index) in images"
        :key="index"
        class="carousel-module__item"
        @click="show(index)"
      >
        <img :src="src" />
      </div>
    </CarouselModule>
  </div>
</template>
<script>
import Viewer from 'v-viewer/src/component.vue'
import 'viewerjs/dist/viewer.css'
import CarouselModule from '@/components/carousel-module'

export default {
  components: {
    Viewer,
    CarouselModule,
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      options: {
        movable: false,
        rotatable: false,
        tooltip: false,
        url: 'data-source',
        toolbar: {
          zoomIn: 4,
          zoomOut: 4,
          oneToOne: 0,
          reset: 0,
          prev: 4,
          play: {
            show: 1,
            size: 'large',
          },
          next: 1,
          rotateLeft: 0,
          rotateRight: 0,
          flipHorizontal: 0,
          flipVertical: 0,
        },
      },
    }
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer
    },
    show(index) {
      this.$viewer.view(index)
    },
  },
}
</script>

<style lang="sass" scoped>
@import "./style.scss";
</style>
