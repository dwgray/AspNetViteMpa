<script setup lang="ts">
import ProductTile from '../../components/ProductTile.vue'
import dotnetLogo from '../../assets/dotnet.svg'
</script>

<template>
  <div>
    <ProductTile msg="Asp.Net" :logo="dotnetLogo" color="purple" link="/aspnet" />

    <p><a href="/">Back to Home</a></p>
  </div>
</template>

<style scoped></style>
