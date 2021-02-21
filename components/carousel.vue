<template>
  <div class="glide ">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="image in images" :key="image" class="glide__slide">
          <div class="flex h-72 md:w-auto md:h-screen" :style="'background: url('+image+');background-position: left;background-repeat: no-repeat;background-size:cover;'">
            <logo-outline
              class="absolute right-0 bottom-0 md:mr-4 h-16 w-16 md:h-24 md:w-24"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
// import Glide, { Controls, Breakpoints, Swipe, Autoplay } from '@glidejs/glide'
import Glide, { Controls, Breakpoints, Swipe, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
import logoOutline from '~/components/logo-outline'
export default {
  components: {
    logoOutline
  },
  data () {
    return {
      slides: [
        {
          image: '/office.png'
        }
      ],
      images: [
        '/carousel/cleaning.png',
        '/carousel/desinfecting.png',
        '/carousel/desinfecting2.png',
        '/carousel/mopping.png',
        '/carousel/wiping.png'
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
      autoplay: 7000,
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
