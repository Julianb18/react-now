<template>
  <div class="reaction my-4 mx-5">
    <!-- clickevent is being passed in as a string from reactionList -->
    <div
      @click="$store.commit(clickEvent, reactionId)"
      class="iconContainer bg-white rounded-md p-8 my-3 shadow-primaryIcon active:shadow-pressedIcon 
       cursor-pointer"
    >
      <img class="" :src="imgUrl" alt="" />
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
    info: Object,
    reactionId: Number,
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
/* 
.reaction:hover img {
  animation: sway 2s ease-in-out infinite;
}

@keyframes sway {
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0);
  }
} */

.iconContainer:active img {
  animation: '';
  transition: none;
  transform: unset;
  opacity: 0.1;
  transform: scale(2.5);
  transition: all 0.3s ease-in-out;
}

.reaction span {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
