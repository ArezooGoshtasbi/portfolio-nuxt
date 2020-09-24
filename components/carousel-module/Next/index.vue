<template>
  <span :class="className" @click="onClick">
    <i class="icon-right"></i>
  </span>
</template>

<script>
export default {
  name: 'Next',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      this.$emit('next', false)
    },
  },
}
</script>
