<template>
  <section id="contactus" style="background: #223974">
    <div class="container py-8">
      <h2 class="text-4xl text-white text-center">
        Contactez Nous
      </h2>
      <div class=" text-gray-300 justify-center flex flex-wrap">
        <div class="w-full py-4 px-2 md:w-1/3">
          <h4 class="text-2xl text-bmg-light-gray">
            Contactez nous
          </h4>
          <ul class="ml-2 text-gray-300 font-light">
            <li v-for="(info,name) in contactInfo" :key="info" class="my-2">
              {{ name }}:
              <span class="font-bold text-white" v-text="info" />
            </li>
          </ul>
        </div>
        <div class="py-4 md:w-1/3 overflow-hidden">
          <fb-posts />
        </div>
        <div class="w-full py-4 md:w-1/3">
          <google-maps :display-title="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fbPosts from '~/components/fb-posts'
import googleMaps from '~/components/google-maps'
export default {
  components: {
    googleMaps,
    fbPosts
  },
  data () {
    const vm = this
    return {
      contactInfo: {
        Contact: vm.$globalVars().email,
        Commercial: vm.$globalVars().commercial,
        Tél: vm.$globalVars().phone
        // addresse: vm.$globalVars().address,
        // horaires: vm.$globalVars().hours
      }
    }
  }
}
</script>

<style>

</style>
