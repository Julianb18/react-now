<template>
  <div class="reaction my-4 mx-5">
    <div
      @click="$store.commit(clickEvent)"
      class="bg-white rounded-md p-8 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
    >
      <img :src="imgUrl" alt="" />
    </div>
    <span
      class="bg-white p-1 block rounded-md font-bold text-primary text-center"
    >
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

<style>
.reaction img {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.reaction span {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
