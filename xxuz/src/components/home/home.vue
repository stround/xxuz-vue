<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../hdfter/header.vue"
import Footer from "../hdfter/footer.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
