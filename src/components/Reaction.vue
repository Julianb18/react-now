<template>
  <div class="my-4 px-5">
    <div
      @click="$store.commit(clickEvent)"
      class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
    >
      <img :src="imgUrl" alt="" />
    </div>
    <span class="bg-white p-1 block rounded-md font-bold text-primary">
      {{ counter }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Reaction',
  props: {
    imgUrl: String,
    counter: Number,
    clickEvent: String,
  },
})
</script>
