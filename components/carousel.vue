<template>
  <div class="glide ">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <!-- <li v-for="(slide) in slides" :key="slide.image" class="glide__slide">

          <div class="h-64 md:h-screen" :style="'background: url('+slide.image+')'">
            <logo class="w-24 md:w-40 mx-auto" />
            <h2 class="text-3xl heading-title text-madjid-blue-light capitalize text-center font-bold">
              Vôtre Satisfaction est notre principale préoccupation
            </h2>
          </div>
        </li> -->
        <!-- <li class="glide__slide">
          <div class="flex">
            <div class="bg-white w-2/5 p-0">
              <logo class="mx-auto mt-16" />
              <h2 class="text-right text-xl capitalize text-madjid-blue font-bold">
                Société d'entretien de nettoyage et entretien
              </h2>
            </div>
            <div class="w-3/5 main-image rounded-bl-full h-screen" />
          </div>
        </li> -->
        <li class="glide__slide">
          <div class="flex main-image md:rounded-bl-full h-72 md:h-screen">
            <div class="w-full md:w-3/5">
              <logo class="ml-4 sm:mx-auto sm:mt-16 h-24 w-24 sm:h-auto sm:w-auto" />
              <h2 class="ml-4 sm:text-center w-48 sm:w-auto mt-4 sm:mt-8 text-md md:text-2xl capitalize text-madjid-blue font-semibold">
                <span class="font-bold"> vôtre Satisfaction</span> est notre principale préoccupation
              </h2>
              <h4 class="text-center mt-2 hidden md:block md:text-sm text-madjid-blue">
                Société d'entretien de nettoyage et de désinféction
              </h4>
            </div>
          </div>
        </li>
        <li class="glide__slide">
          <div class="flex h-72 md:h-screen" style="background:url('/hospital-cleaning.png');background-position:center; background-size:cover; background-repeat:no-repeat">
            <div class="w-full md:w-2/3 my-2 md:my-4">
              <logo class="ml-16 h-24 w-24 md:w-56 md:h-56" />
              <h2 class="ml-4 sm:ml-16 text-md md:text-2xl capitalize text-madjid-blue font-semibold">
                nettoyage des cliniques et hopitaux
              </h2>
            </div>
          </div>
        </li>
        <li class="glide__slide">
          <div class="flex h-72 md:h-screen" style="background:url('/desinfection.png');background-position:center; background-size:cover; background-repeat:no-repeat">
            <div class="w-full md:w-2/3 my-2 md:my-4">
              <logo class="ml-16 h-24 w-24 md:w-56 md:h-56" />
              <h2 class="ml-4 sm:ml-16 text-md md:text-2xl capitalize text-madjid-blue font-semibold">
                désinfection et déralisations
              </h2>
            </div>
          </div>
        </li>
      </ul>
      <!-- <div data-glide-el="controls">
        <div class="absolute mx-2 md:mx-16 flex flex-row items-center top-0 bottom-0 ">
          <button data-glide-dir="<" class="hover:bg-white rounded-full text-madjid-blue focus:outline-none">
            <svg class="w-10 h-10 md:w-12 w-10 h-10 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
        </div>
        <div class="absolute mx-2 md:mx-16 flex flex-row items-center top-0 right-0 bottom-0 ">
          <button data-glide-dir="<" class="hover:bg-white rounded-full text-madjid-blue focus:outline-none">
            <svg class="w-10 h-10 md:w-12 w-10 h-10 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
// import Glide, { Controls, Breakpoints, Swipe, Autoplay } from '@glidejs/glide'
import Glide, { Controls, Breakpoints, Swipe, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
import logo from '~/components/Logo'
export default {
  components: {
    logo
  },
  data () {
    return {
      slides: [
        {
          image: '/office.png'
        }
      ]
    }
  },
  mounted () {
    const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      gap: 0,
      //   animationDuration: 400,
      hoverpause: false,
      autoplay: 2000,
      peek: 0
    })
    glide.mount({ Controls, Breakpoints, Swipe, Autoplay })
  }
}
</script>

<style scoped>

.heading-title{
    text-shadow: 1px 1px #141b39;
}
.main-image{
  background: url('/cleaning.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size:cover;

}
.glide__slides {transform:none !important; width:auto !important; display:block;}
 .glide__slide {position:absolute; left:0; top:0; opacity:0; transition:opacity 1s;}
 .glide__slide:first-child {position:relative;}
 .glide__slide--active {z-index:1; opacity:1;}
</style>
