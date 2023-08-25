<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

defineProps<{
  msg: string
}>()

const serverMessage = ref("Server hasn't responded yet")

onMounted(async () => {
  serverMessage.value = (await axios.get('/api/hello')).data
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <h3>Hot Module reload is working</h3>
    <h3>Assets are correctly loading in dev and prod</h3>
    <h3>Server Message: {{ serverMessage }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
