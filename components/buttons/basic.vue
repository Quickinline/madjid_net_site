<template>
  <button class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-l hover:text-md from-madjid-blue to-madjid-blue-light hover:bg-madjid-blue-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-madjid-blue" v-text="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style>

</style>
