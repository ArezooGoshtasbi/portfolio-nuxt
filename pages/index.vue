<template>
  <div class="home-page">
    <Banner />
    <About />
  </div>
</template>

<script>
import Banner from '@/components/banner'
import About from '@/components/about'
export default {
  components: {
    Banner,
    About,
  },
}
</script>
