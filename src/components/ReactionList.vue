<template>
  <div class="flex justify-center ">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10">
      <div v-for="reaction in $store.state.reactionList" :key="reaction.id">
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
})
</script>
