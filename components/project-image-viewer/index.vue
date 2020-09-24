<template>
  <div id="app">
    <viewer
      ref="viewer"
      :options="options"
      :images="images"
      class="viewer"
      @inited="inited"
    >
      <template slot-scope="scope">
        <img v-for="(src, index) in scope.images" :key="index" :src="src" />
      </template>
    </viewer>
  </div>
</template>
<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer/src/component.vue'

export default {
  components: {
    Viewer,
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
      },
    }
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer
    },
  },
}
</script>

<style lang="sass" scoped>
@import "./style.scss";
</style>
