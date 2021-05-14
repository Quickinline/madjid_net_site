<template>
  <div>
    <h4 v-if="displayTitle" class="text-2xl font-baumans text-bmg-light-gray">
      Google-maps
    </h4>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12809.405869300692!2d2.932315!3d36.6179257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8a7bc31902a68b7!2sMADJID%20NET!5e0!3m2!1sen!2sdz!4v1620934066266!5m2!1sen!2sdz"
      height="500"
      class="w-98 mx-auto"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
  </div>
</template>

<script>
export default {
  props: {
    displayTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
