<template>
  <div>
    <Header class-name="header-home" />
    <Nuxt />
    <Footer />
    <BackToTop :scroll-step-in-px="2000" :delay-in-ms="500" />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackToTop from '@/components/back-to-top'

export default {
  components: {
    Header,
    Footer,
    BackToTop,
  },
}
</script>
