<template>
  <div>
    <div class="w-full px-4 md:px-24 text-xs md:text-sm py-1 bg-madjid-blue text-white">
      <div class="container mx-auto flex flex-row justify-end">
        <a class="flex flex-row items-center ml-2" :href="'mailto:'+$globalVars().email">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <span>{{ $globalVars().email }}</span>
        </a>
        <a class="flex flex-row items-center ml-2 md:ml-4 xl:ml-6" :href="'tel:'+$globalVars().phone">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          <span>{{ $globalVars().phone }}</span>
        </a>
      </div>
    </div>
    <navbar />
    <Nuxt />
    <footer-element />
  </div>
</template>
<script>
import navbar from '~/components/navbar'
import footerElement from '~/components/footer'
export default {
  components: {
    navbar,
    footerElement
  }
}
</script>
<style>

</style>
