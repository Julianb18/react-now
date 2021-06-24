<template>
  <div class="mt-5 border w-full flex justify-center items-center">
    <div data-vimeo-id="483349301" data-vimeo-width="640" id="vid"></div>
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
