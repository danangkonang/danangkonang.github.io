<template>
  <div class="">
    <Navbar />
    <div class="container mx-auto px-4 md:px-12 mb-12">
      <div class="block md:flex justify-between bg-orange-700 pt-24">
        <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
          <div class="bg-white rounded-lg overflow-hidden shadow relative">
            <img class="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80" alt="">
            <div class="p-4 h-auto md:h-40 lg:h-48">
              <a href="#" class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                Woman standing under blue sky
              </a>
              <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
          <div class="bg-white rounded-lg overflow-hidden shadow relative">
            <img class="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="">
            <div class="p-4 h-auto md:h-40 lg:h-48">
              <a href="#" class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                Woman walking on pathway
              </a>
              <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum sit quasi. Alias quasi officiis blanditiis!
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
          <div class="bg-white rounded-lg overflow-hidden shadow relative">
            <img class="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1467238307002-480ffdd260f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="">
            <div class="p-4 h-auto md:h-40 lg:h-48">
              <a href="#" class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                Walking through a forest in the afternoon
              </a>
              <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo magni saepe cumque error quia quae sint ducimus, maiores doloremque.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
