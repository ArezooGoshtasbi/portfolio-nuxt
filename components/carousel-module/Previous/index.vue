<template>
  <span :class="className" @click="onClick">
    <i class="icon-left"></i>
  </span>
</template>

<script>
export default {
  name: 'Prev',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      this.$emit('prev', true)
    },
  },
}
</script>
