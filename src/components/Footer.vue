<template>
  <div class="bg-gray-700">
    <div class="container mx-auto px-4 md:px-12 mb-12">
      <div class="block md:flex justify-between bg-orange-700 pt-5">
        <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 text-white">
          <div class="font-bold mb-3">Social Media</div>
          <ul>
            <li>linkedin</li>
          </ul>
        </div>
        <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 text-white">
          <div class="font-bold mb-3">Contact Us</div>
          <ul>
            <li>danangkonang21@gmail.com</li>
          </ul>
        </div>
        <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 text-white">
          <div class="font-bold mb-3">Contact Us</div>
          <ul>
            <li>danangkonang21@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center py-10 text-white text-sm">danangkonang.github.io {{ new Date().getFullYear() }}</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
  setup() {
  },
};
</script>
