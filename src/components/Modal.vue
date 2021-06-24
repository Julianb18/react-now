<template>
  <div
    @click.self="closeModal"
    class="fixed h-screen w-full top-0 bg-gray-900 bg-opacity-30 flex justify-center items-center "
  >
    <div class="bg-white -mt-48 py-5 px-10 rounded-md">
      <form @submit.prevent class="flex flex-col">
        <h3 class="text-3xl mb-6">Share your thoughts?</h3>
        <textarea class="bg-gray-200 rounded-md p-2" type="text" rows="4" />
        <div>
          <button
            class="bg-secondary text-white py-1 px-3 mt-4 rounded-md shadow-submitBtn hover:shadow-submitPressed"
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

export default defineComponent({
  methods: {
    closeModal() {
      this.$emit('close')
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
