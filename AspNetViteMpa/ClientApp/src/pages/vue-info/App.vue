<script setup lang="ts">
import ProductTile from '../../components/ProductTile.vue'
import vueLogo from '../../assets/vue.svg'
</script>

<template>
  <div>
    <ProductTile msg="Vue.js" :logo="vueLogo" color="green" link="/vue" />

    <p><a href="/">Back to Home</a></p>
  </div>
</template>

<style scoped></style>
