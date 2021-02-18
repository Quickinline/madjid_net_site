<template>
  <nav class="bg-white shadow-xl py-2 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex flex-row items-center">
            <logo class="h-16 w-16" />
            <logo-text class="w-48 block" />
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-900 hover:bg-gray-700 hover:text-white" -->
                <NuxtLink
                  v-for="nav in navs"
                  :key="nav.text"
                  :to="nav.to"
                  class="text-gray-600 hvr-underline-from-center hover:text-black mx-4 py-0 text-sm font-medium"
                  v-text="nav.text"
                />
              </div>
            </div>
            <div class="flex flex-row mx-4">
              <a href="#" class="mx-2">
                <facebook class="w-5 hover:w-6" />
              </a>
              <a href="#">
                <instagram class="w-5" />
              </a>
            </div>
            <basic-button text="Contactez nous" />
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            class="bg-gray-100 inline-flex items-center justify-center m-2 rounded-md text-madjid-blue hover:text-madjid-blue-darker hover:bg-white focus:outline-none focus:ring-2 focus:ring-madjid-blue"
            @click="triggerMenu()"
          >
            <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="h-6 w-6"
              :class="[{'block':!menu},{'hidden':menu}]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="h-6 w-6"
              :class="[{'block':menu},{'hidden':!menu}]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div
      class="md:hidden"
      :class="[{'block':menu},{'hidden':!menu}]"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-900 hover:bg-gray-700 hover:text-white" -->

        <NuxtLink
          v-for="nav in navs"
          :key="nav.text"
          :to="nav.to"
          class="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          v-text="nav.text"
        />
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700 flex flex-col">
        <div class="flex flex-row justify-between mx-4">
          <div class="flex flex-row items-center">
            <a href="#" class="mr-2">
              <facebook class="w-5" />
            </a>
            <a href="#">
              <instagram class="w-5" />
            </a>
          </div>
          <basic-button text="Contactez nous" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import instagram from '~/components/svg/instagram.vue'
import logo from '~/components/Logo'
import logoText from '~/components/logo-text.vue'
import facebook from '~/components/svg/facebook'
import basicButton from '~/components/buttons/basic'
export default {
  components: {
    logo,
    logoText,
    facebook,
    instagram,
    'basic-button': basicButton
  },

  data () {
    return {
      navs: [
        {
          text: 'Accueil',
          to: '/'
        },
        {
          text: 'Nos services et préstations',
          to: '/hello'
        },
        {
          text: 'Contact',
          to: '/feftg'
        }
      ],
      menu: false
    }
  },
  methods: {
    triggerMenu () {
      this.menu = !this.menu
    }
  }
}
</script>

<style scoped>

/* Underline From Center */
.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #25336C;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}

.nuxt-link-active {
  @apply text-madjid-blue
}
</style>
