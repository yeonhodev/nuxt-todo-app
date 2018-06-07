<template>
  <div>
    <navigation-bar/>
    <nuxt/>
    <footer-bar/>
  </div>
</template>

<script>
import NavigationBar from '~/components/Navigation'
import FooterBar from '~/components/Footer'
export default {
  components: {
    NavigationBar,
    FooterBar
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/scss/index';
</style>
