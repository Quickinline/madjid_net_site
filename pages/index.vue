<template>
  <main>
    <!-- <img src="~/assets/png/office.png" alt=""> -->
    <!-- <div>
    </div> -->
    <carousel />
    <services />
  </main>
</template>

<script>
import carousel from '~/components/carousel.vue'
// import logo from '~/components/Logo'
import services from '~/components/services'
export default {
  components: {
    carousel,
    // logo,
    services
  },
  layout: 'external'

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
