<template>
  <div class=" h-full rounded-md flex flex-col items-center">
    <h1 class="text-center text-2xl text-secondary font-semibold mb-6">
      Thoughts
    </h1>

    <div
      v-if="$store.state.thoughts.length === 0"
      class="bg-white rounded-md px-3 py-1 mb-4 text-secondary shadow-primaryIcon"
    >
      <p>Add your thoughts after the video has ended...</p>
    </div>
    <!-- thought.index not good practice and will get buggy if I want to add remove thought function-->
    <!-- TODO:implement remove thought -->
    <div v-else v-for="thought in $store.state.thoughts" :key="thought.index">
      <div
        class="bg-white rounded-md px-3 py-1 mb-4 text-secondary shadow-primaryIcon w-60 max-w-xl md:w-xl lg:w-60"
      >
        <p>{{ thought }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Thoughts',
})
</script>

<style></style>
