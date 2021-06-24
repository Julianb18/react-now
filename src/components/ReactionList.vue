<template>
  <div class="border flex justify-center ">
    <div class=" flex flex-wrap justify-center my-10 border-2 max-w-lg">
      <!-- <div v-for="reaction in $store.state.reactionList" :key="reaction.id">
      this will wrap one ov the divs to dynamically load them
        <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseLikes')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img :src="reaction.icon" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.likes }}
        </span>
      </div>
      </div> -->

      <!-- TODO: make this code more dynamic like above  -->
      <Reaction
        :imgUrl="require('../assets/like.png')"
        :counter="$store.state.counters.likes"
        clickEvent="increaseLikes"
      />
      <Reaction
        :imgUrl="require('../assets/dislike.png')"
        :counter="$store.state.counters.dislikes"
        clickEvent="increaseDislikes"
      />
      <Reaction
        :imgUrl="require('../assets/heart.png')"
        :counter="$store.state.counters.hearts"
        clickEvent="increaseHearts"
      />
      <Reaction
        :imgUrl="require('../assets/clapping.png')"
        :counter="$store.state.counters.claps"
        clickEvent="increaseClaps"
      />
      <Reaction
        :imgUrl="require('../assets/happy.png')"
        :counter="$store.state.counters.smiles"
        clickEvent="increaseSmiles"
      />
      <Reaction
        :imgUrl="require('../assets/excited.png')"
        :counter="$store.state.counters.grins"
        clickEvent="increaseGrins"
      />
      <Reaction
        :imgUrl="require('../assets/rocket.png')"
        :counter="$store.state.counters.rockets"
        clickEvent="increaseRockets"
      />
      <Reaction
        :imgUrl="require('../assets/sad.png')"
        :counter="$store.state.counters.saddies"
        clickEvent="increaseSaddies"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Reaction from '../components/Reaction.vue'

export default defineComponent({
  name: 'ReactionList',
  components: {
    Reaction,
  },
})
</script>
