<template>
  <!-- @click.self is so that the click event doesnt happen on the children of this element -->
  <div
    @click.self="closeModal"
    class="fixed h-screen w-full top-0 left-0 bg-gray-900 bg-opacity-30 flex justify-center items-center "
  >
    <div class="bg-white -mt-48 py-5 px-10 rounded-md">
      <form @submit.prevent="submitHandler(thought)" class="flex flex-col">
        <h3 class="text-3xl mb-6">Share your thoughts?</h3>
        <textarea
          v-model="thought"
          class="bg-gray-200 rounded-md p-2"
          type="text"
          rows="4"
        />
        <div class="flex justify-center">
          <!-- $store.commit is invoking the add_thoughts handler with the payload thought-->
          <button
            @click="submitHandler(thought)"
            class="bg-primary text-white py-1 px-3 mt-4 rounded-md shadow-submitBtn hover:shadow-submitPressed"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
  data() {
    return {
      thought: '',
    }
  },
  methods: {
    ...mapMutations(['add_thoughts']),
    closeModal() {
      this.$emit('close')
    },

    submitHandler(thought: any) {
      this.closeModal()
      this.add_thoughts(thought)
    },
  },
})
</script>

<style scoped>
textarea {
  resize: none;
}
textarea:focus {
  outline: none;
  border: unset;
}

button:focus {
  outline: unset;
}
</style>
