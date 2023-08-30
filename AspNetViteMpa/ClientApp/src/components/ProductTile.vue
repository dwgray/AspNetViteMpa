<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  msg: string
  logo: string
  color: string
  link: string
}>()

const fullLink = computed(() => {
  return `/home${props.link}`
})
</script>

<template>
  <div>
    <img class="logo" :src="logo" width="125" height="125" />

    <h2 :style="{ color: color }">
      {{ msg }}
    </h2>
    <h3>
      <a :href="fullLink">{{ fullLink }}</a>
    </h3>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

h2 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  text-align: center;
}

h3 {
  text-align: center;
  font-size: 1.2rem;
}
</style>
