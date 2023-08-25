<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ProductTile from '../../components/ProductTile.vue'

import dotnetLogo from '../../assets/dotnet.svg'
import viteLogo from '../../assets/vite.svg'
import vueLogo from '../../assets/vue.svg'

const serverMessage = ref("Server hasn't responded yet")

onMounted(async () => {
  serverMessage.value = (await axios.get('/api/hello')).data
})
</script>

<template>
  <div>
    <ProductTile msg="Vite.js" :logo="viteLogo" color="green" link="/vite" />
    <ProductTile msg="Asp.Net" :logo="dotnetLogo" color="purple" link="/aspnet" />
    <ProductTile msg="Vue.js" :logo="vueLogo" color="green" link="/vue" />

    <p>Server Message: {{ serverMessage }}</p>
  </div>
</template>

<style scoped></style>
