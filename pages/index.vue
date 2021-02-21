<template>
  <main>
    <!-- <img src="~/assets/png/office.png" alt=""> -->
    <!-- <div>
    </div> -->
    <carousel />
    <services />
    <feature-two class="my-4 md:my-8" />
    <feature class="my-4 md:my-8" />
    <contact-us />
    <about />
  </main>
</template>

<script>
import carousel from '~/components/carousel.vue'
// import logo from '~/components/Logo'
import services from '~/components/services'
import feature from '~/components/feature'
import featureTwo from '~/components/feature-two'
import contactUs from '~/components/contact-us.vue'
import about from '~/components/about.vue'
export default {
  components: {
    carousel,
    // logo,
    services,
    feature,
    featureTwo,
    contactUs,
    about
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
