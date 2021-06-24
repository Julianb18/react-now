<template>
  <div class="h-screen bg-gray-200">
    <h1 class="pt-3 text-5xl font-bold">React Now</h1>
    <VideoPlayer @videoEnd="toggleModal" />
    <ReactionList />
    <div v-if="showModal">
      <Modal @close="toggleModal" />
    </div>
    <div v-for="thought in $store.state.thoughts" :key="thought.index">
      <p>{{ thought }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import VideoPlayer from './components/VideoPlayer.vue'
import ReactionList from './components/ReactionList.vue'
import Modal from './components/Modal.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    VideoPlayer,
    ReactionList,
    Modal,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
