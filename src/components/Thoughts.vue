<template>
  <div class=" h-full rounded-md flex flex-col items-center ">
    <div class=" mb-6 w-full">
      <h1 class="text-center text-2xl text-secondary font-semibold ">
        Thoughts
      </h1>
    </div>

    <form class="flex w-full mb-6" @submit.prevent="addHandler(thought)">
      <input
        v-model="thought"
        class="w-full px-1 outline-none rounded-md mr-2"
        type="text"
      />
      <button
        class="bg-white py-1 px-2 block rounded-md font-bold text-primary text-center ml"
      >
        add
      </button>
    </form>

    <div
      v-if="$store.state.thoughts.length === 0"
      class="w-full bg-white rounded-md px-3 py-1 mb-4 text-secondary shadow-primaryIcon"
    >
      <p>Add your thoughts here...</p>
    </div>
    <!-- thought.index not good practice and will get buggy if I want to add remove thought function-->
    <!-- TODO:implement remove thought -->
    <div
      v-for="thought in $store.state.thoughts.slice().reverse()"
      :key="thought.index"
    >
      <div
        class="bg-white rounded-md px-3 py-1 mb-4 text-secondary shadow-primaryIcon w-60 max-w-xl md:w-xl lg:w-60"
      >
        <p>{{ thought }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
  name: 'Thoughts',
  data() {
    return {
      thought: '',
    }
  },

  methods: {
    ...mapMutations(['add_thoughts']),

    addHandler(thought: string) {
      this.add_thoughts(thought)
      this.thought = ''
    },
  },
})
</script>

<style></style>
