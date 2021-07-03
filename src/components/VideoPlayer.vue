<template>
  <div class="mt-5 border w-full flex justify-center items-center">
    <!-- <div v-if="vidWidth === 260">
      <div
        data-vimeo-id="483349301"
        data-vimeo-width="260"
        responsive="true"
        id="vid"
      ></div>
    </div>
    <div v-else-if="vidWidth === 450">
      <div
        data-vimeo-id="483349301"
        data-vimeo-width="450"
        responsive="true"
        id="vid"
      ></div>
    </div>
    <div v-else>
      <div
        data-vimeo-id="483349301"
        data-vimeo-width="640"
        responsive="true"
        id="vid"
      ></div>
    </div> -->
    <div
      data-vimeo-id="483349301"
      :data-vimeo-width="vidWidth"
      responsive="true"
      id="vid"
    ></div>
  </div>
  <p class="text-center">video width: {{ vidWidth }}</p>
  <p class="text-center">window width: {{ $windowWidth }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Player from '@vimeo/player'

export default defineComponent({
  name: 'VideoPlayer',

  data: () => ({
    vidWidth: 640,
  }),

  methods: {
    videoEnd() {
      this.$emit('videoEnd')
    },

    // checking the window width and setting vidWidth according to the window width
    dynamicWidth() {
      if (this.$windowWidth <= 650) {
        return (this.vidWidth = 260)
      } else if (this.$windowWidth >= 650) {
        return (this.vidWidth = 450)
      }
    },
  },

  created() {
    window.addEventListener('resize', this.dynamicWidth)
  },

  mounted() {
    const player = new Player('vid')

    player.on('ended', () => {
      this.videoEnd()
      console.log('video has ended')
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.dynamicWidth)
  },
})
</script>
