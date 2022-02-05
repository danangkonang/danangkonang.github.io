<template>
  <nav class="fixed w-full z-20 top-0 bg-blue-600">
    <div class="flex items-center justify-between h-16 container mx-auto px-4 md:px-12">

      <div class="-ml-2">
        <a href="/" class="text-white text-xl">
          DanangKonang
        </a>
      </div>

      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div class="hidden md:flex items-center justify-end">
        <div class="">
          <ul class="flex space-x-8 font-bold text-white">
            <li><a href="javascript:void(0)" class="border-b-2 border-transparent pb-1" v-on:click="scrollTo('about')">About</a></li>
            <li><a href="javascript:void(0)" class="border-b-2 border-transparent pb-1" v-on:click="scrollTo('baner')">Portofolio</a></li>
            <li><a href="javascript:void(0)" class="border-b-2 border-transparent pb-1" v-on:click="scrollTo('contact')">Contact Us</a></li>
          </ul>
        </div>

        <div class=" ml-4">
          <button @click="toggleModalDemo" class="block border-white border-2 max-w-xs w-32 focus:ring focus:ring-white focus:ring-opacity-30 focus:outline-none rounded-3xl px-1 py-2 font-bold hover:opacity-80 text-white">CV</button>
        </div>
      </div>

      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer -->
      <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg
              class="w-6 h-6"
              fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center py-4 border-b">
          <a href="/" class="font-bold text-gray-700">DanangKonang</a>
        </span>

        <ul class="divide-y text-gray-700">
          <li><a href="javascript:void(0)" v-on:click="scrollTo('about')" class="my-4 inline-block">About</a></li>
          <li><a href="javascript:void(0)" v-on:click="scrollTo('baner')" class="my-4 inline-block">Portofolio</a></li>
          <li><a href="javascript:void(0)" v-on:click="scrollTo('contact')" class="my-4 inline-block">Contact Us</a></li>
        </ul>
      </aside>

    </div>

  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    scrollTo(val) {
      const el = document.getElementById(val);
      window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
      this.isOpen = false;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden');
          else document.body.style.removeProperty('overflow');
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
<style lang="css" scoped>
</style>
