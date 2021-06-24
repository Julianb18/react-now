<template>
  <div class="border flex justify-center ">
    <div
      class="flex flex-wrap justify-center my-10 border-2 border-red-500 max-w-lg"
    >
      <div v-for="reaction in reactionList" :key="reaction.id">
        <div class="my-4 px-5">
          <div
            @click="$store.commit('increaseLikes')"
            class="bg-white rounded-md p-6 my-3 shadow-primaryBtn hover:shadow-pressedBtn cursor-pointer"
          >
            <img :src="reaction.icon" :alt="reaction.reaction" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Reactions',
  data() {
    return {
      reactionList: [
        { id: 1, reaction: 'thumbsUp', icon: require('../assets/like.png') },
        {
          id: 2,
          reaction: 'thumbsDown',
          icon: require('../assets/dislike.png'),
        },
        { id: 3, reaction: 'heart', icon: require('../assets/heart.png') },
        { id: 4, reaction: 'clap', icon: require('../assets/clapping.png') },
        { id: 5, reaction: 'happy', icon: require('../assets/happy.png') },
        { id: 6, reaction: 'excited', icon: require('../assets/excited.png') },
        { id: 7, reaction: 'awesome', icon: require('../assets/rocket.png') },
        { id: 8, reaction: 'sad', icon: require('../assets/sad.png') },
      ],
    }
  },
})
</script>
