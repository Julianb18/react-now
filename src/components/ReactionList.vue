<template>
  <div class="flex justify-center ">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
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

      <div v-for="reaction in $store.state.reactionList" :key="reaction.id">
        {{ log(reaction) }}
        <Reaction
          :info="reaction"
          :reactionId="reaction.id"
          :imgUrl="reaction.icon"
          :counter="reaction.counter"
          clickEvent="INCREMENT"
        />
      </div>
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

  methods: {
    log(message: any) {
      console.log(message)
    },
  },
})
</script>
