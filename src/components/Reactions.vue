<template>
  <div class="border flex justify-center ">
    <div
      class="flex flex-wrap justify-center my-10 border-2 border-red-500 max-w-lg"
    >
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
      <!-- like -->
      <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseLikes')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img src="../assets/like.png" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.likes }}
        </span>
      </div>
      <!-- end of like -->

      <!-- dislike -->
      <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseDislikes')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img src="../assets/dislike.png" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.dislikes }}
        </span>
      </div>
      <!-- end of dislike -->

      <!-- heart -->
      <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseHearts')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img src="../assets/heart.png" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.hearts }}
        </span>
      </div>
      <!-- end of heart -->

      <!-- clap -->
      <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseClaps')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img src="../assets/clapping.png" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.claps }}
        </span>
      </div>
      <!-- end of clap -->

      <!-- happy -->
      <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseSmiles')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img src="../assets/happy.png" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.smiles }}
        </span>
      </div>
      <!-- end of happy -->

      <!-- excited -->
      <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseGrins')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img src="../assets/excited.png" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.grins }}
        </span>
      </div>
      <!-- end of excited -->

      <!-- awesome -->
      <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseRockets')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img src="../assets/rocket.png" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.rockets }}
        </span>
      </div>
      <!-- end of awesome -->

      <!-- sad -->
      <div class="my-4 px-5">
        <div
          @click="$store.commit('increaseSaddies')"
          class="bg-white rounded-md p-6 my-3 shadow-primaryIcon hover:shadow-pressedIcon cursor-pointer"
        >
          <img src="../assets/sad.png" alt="" />
        </div>
        <span class="bg-white p-1 block rounded-md font-bold text-primary">
          {{ $store.state.counters.saddies }}
        </span>
      </div>
      <!-- end of sad -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Reactions',
})
</script>
