<template>
  <div class="h-screen bg-gray-200">
    <h1 class="pt-3 text-5xl font-bold">React Now</h1>
    <VideoPlayer />
    <Reactions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Reactions from './components/Reactions.vue'
import VideoPlayer from './components/VideoPlayer.vue'

export default defineComponent({
  components: { VideoPlayer, Reactions },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
