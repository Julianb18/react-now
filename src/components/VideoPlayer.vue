<template>
  <div
    class="mt-5 border border-blue-700 w-full h-80 flex justify-center items-center"
  >
    <div class="">
      <div data-vimeo-id="483349301" data-vimeo-width="640" id="vid"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Player from '@vimeo/player'

export default defineComponent({
  name: 'VideoPlayer',
  methods: {
    videoEnd() {
      this.$emit('videoEnd')
    },
  },
  mounted() {
    const player = new Player('vid')

    player.on('ended', () => {
      this.videoEnd()
      console.log('video has ended')
    })
  },
})
</script>
