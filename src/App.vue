<template>
  <main class="min-h-screen  bg-gray-200 ">
    <header class="bg-primary text-white text-center p-3 text-5xl font-bold">
      <h1 class="text-5xl font-bold">
        React Now
      </h1>
    </header>
    <div
      class="flex lg:flex-row sm:flex-col items-center
      lg:items-start justify-center px-8 py-5 "
    >
      <div class="">
        <!-- @videoEnd is being emitted from videoPlayer component -->
        <VideoPlayer @videoEnd="toggleModal" />
        <ReactionList />
      </div>
      <div
        class=" mt-6 min-h-full max-w-xl md:w-xl lg:w-60  lg:ml-10 2lg:-mr-60"
      >
        <Thoughts />
      </div>
    </div>
    <div v-if="showModal">
      <!-- @close is being emitted from modal -->
      <Modal @close="toggleModal" />
    </div>
  </main>
</template>

<script lang="ts">
import VideoPlayer from './components/VideoPlayer.vue'
import ReactionList from './components/ReactionList.vue'
import Thoughts from './components/Thoughts.vue'
import Modal from './components/Modal.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    VideoPlayer,
    ReactionList,
    Modal,
    Thoughts,
  },

  data() {
    return {
      showModal: false,
    }
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
})
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
