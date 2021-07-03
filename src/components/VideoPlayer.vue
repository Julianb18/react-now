<template>
  <div class="mt-5 border w-full flex justify-center items-center">
    <div
      class="videoContainer"
      data-vimeo-id="483349301"
      :data-vimeo-width="640"
      responsive="true"
      id="vid"
    ></div>
  </div>
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

<style>
.videoContainer iframe {
  width: 280px;
}

@media screen and (min-width: 680px) {
  .videoContainer iframe {
    width: 480px;
  }

  @media screen and (min-width: 820px) {
    .videoContainer iframe {
      width: 640px;
    }
  }
}
</style>
