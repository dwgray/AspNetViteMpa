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

<style scoped lang="scss">
@mixin center-text {
  text-align: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

h2 {
  @include center-text();
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  @include center-text();
  font-size: 1.2rem;
}
</style>
