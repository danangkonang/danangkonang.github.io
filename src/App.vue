<template>
  <div class="">
    <Navbar />
    <div class="container mx-auto px-4 md:px-12 pt-24 min-h-screen">
      <div class="flex flex-row">
        <div class="w-1/3 p-3">
          <div class="shadow-xl p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quae maxime laudantium nam eos temporibus quidem corporis voluptatibus architecto sit doloribus nobis soluta iure at sequi vitae aut velit magnam.
          </div>
        </div>
        <div class="w-1/3 p-3">
          <div class="shadow-xl p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quae maxime laudantium nam eos temporibus quidem corporis voluptatibus architecto sit doloribus nobis soluta iure at sequi vitae aut velit magnam.
          </div>
        </div>
        <div class="w-1/3 p-3">
          <div class="shadow-xl p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quae maxime laudantium nam eos temporibus quidem corporis voluptatibus architecto sit doloribus nobis soluta iure at sequi vitae aut velit magnam.
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
