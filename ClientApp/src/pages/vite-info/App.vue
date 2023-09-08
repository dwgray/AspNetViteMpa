<script setup lang="ts">
import ProductTile from '../../components/ProductTile.vue'
import viteLogo from '../../assets/vite.svg'
</script>

<template>
  <div>
    <ProductTile msg="Vite.js" :logo="viteLogo" color="green" link="/vite" />

    <p><a href="/">Back to Home</a></p>
  </div>
</template>

<style scoped></style>
