<template>
  <div>
    <Header
      class-name="header-project"
      :active-on-scroll="false"
      :is-home="false"
    />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
