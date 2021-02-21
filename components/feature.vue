<template>
  <section class="relative py-20">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <!-- <img alt="..." class="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"> -->
          <div class="h-96 border border-gray-400 rounded shadow-lg" style="background:url('/carousel/mopping.png');background-position: left;background-size:cover;" />
          <!-- <img src="http://picsum.photos/500/700" alt="" class="max-w-full rounded-lg shadow-lg"> -->
        </div>
        <div class="w-full md:w-7/12 mt-20 md:mt-0 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <div class="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-madjid-blue">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 512.007 512.007" xmlns="http://www.w3.org/2000/svg"><path d="M497 482.006h-16v-296c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v296h-30v-196c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v196h-30v-141c0-8.284-6.716-15-15-15h-60c-8.284 0-15 6.716-15 15v141h-30v-105c0-8.284-6.716-15-15-15H46c-8.284 0-15 6.716-15 15v105H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h482c8.284 0 15-6.716 15-15s-6.716-15-15-15z" /><path d="M15 322.31c93.618 0 195.14-33.622 285.866-94.673 71.055-47.815 130.286-108.898 167.078-171.445l14.568 54.367c1.796 6.702 10.467 12.492 18.371 10.606 8.058-1.922 12.75-10.369 10.606-18.371l-24.563-91.67C484.781 3.123 476.56-1.627 468.555.518l-91.67 24.563c-8.002 2.144-12.75 10.369-10.606 18.371 2.145 8.002 10.366 12.752 18.371 10.606l59.055-15.824C409.38 97.88 352.652 156.628 284.117 202.747 198.289 260.503 102.715 292.31 15 292.31c-8.284 0-15 6.716-15 15s6.716 15 15 15z" /></svg>
            </div><h3 class="text-3xl font-semibold">
              Une entreprise en pleine évolution
            </h3><p class="mt-4 text-lg leading-relaxed text-gray-600">
              Nôtre expertise est mise à vôtre disposition dans plusieurs services
            </p><ul class="list-none mt-6">
              <li v-for="task in tasks" :key="task" class="py-2">
                <div class="flex items-center">
                  <div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-madjid-blue mr-3"><i class="fas fa-fingerprint" /></span></div><div>
                    <h4 class="text-gray-600" v-text="task" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        'Nettoyage des administrations',
        'Nettoyage des locaux et hangars',
        'Nettoyage des Cliniques et hopitaux',
        'Traitement de façades',
        'Nettoyage et traitement de tous types de surfaces',
        'Désinfection et dératisations',
        'Décongestion et assainissement'
      ]
    }
  }
}
</script>

<style>

</style>
