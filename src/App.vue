<template>
  <div id="container">
    <vue-header></vue-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VueHeader from './components/Header'

export default {
  components: {
    VueHeader
  }
}
</script>
