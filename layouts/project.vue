<template>
  <div>
    <Header
      class-name="header-project"
      :active-on-scroll="false"
      :is-home="false"
    />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header,
  },
}
</script>
