<template>
  <div class="reaction my-4 mx-5">
    <!-- clickevent is being passed in as a string from reactionList -->
    <div
      @click="$store.commit(clickEvent)"
      class="iconContainer bg-white rounded-md p-8 my-3 shadow-primaryIcon active:shadow-pressedIcon 
      transform transition duration-500 ease-in-out  cursor-pointer"
    >
      <img class="" :src="imgUrl" alt="" />
    </div>
    <span
      class="bg-white p-1 block rounded-md font-bold text-primary text-center active:"
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
.iconContainer:active img {
  transition: all 0.3s ease-in-out;
  opacity: 0.1;
  transform: scale(2.5);
}
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
