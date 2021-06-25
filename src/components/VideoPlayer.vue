<template>
  <div class="mt-5 border w-full flex justify-center items-center">
    <div data-vimeo-id="483349301" data-vimeo-width="640" id="vid"></div>
    <!-- <p>{{ $windowWidth }}</p>
    <p>{{ dynamicWidth() }}</p> -->
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
    // TODO: find a way to run this whem window size is changed
    // dynamicWidth() {
    //   if (this.$windowWidth >= 320) {
    //     return '260'
    //   } else if (this.$windowWidth >= 650) {
    //     return '450'
    //   }
    // },
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
