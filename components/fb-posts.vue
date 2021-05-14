<template>
  <div class="">
    <h4 class="text-2xl font-baumans text-bmg-light-gray">
      Suivez Nous
    </h4>
    <!-- <script async crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v9.0&appId=257374912241023&autoLogAppEvents=1" nonce="htKQmugR" /> -->
    <iframe
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMadjid-Net-100568588890846&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=313301273578592"
      width="340"
      height="500"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  </div>
</template>

<script>
/* eslint-disable no-console */
const load = require('load-script')

export default {
  data () {
    return {
      facebook: this.$globalVars().facebookPage
    }
  },
  mounted () {
    load('https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v9.0&appId=257374912241023&autoLogAppEvents=1', function (err, script) {
      if (err) {
        // console.error('an error occured')
      } else {
        // console.log('script loaded')
      }
    })
  }
}
</script>

<style>
</style>
