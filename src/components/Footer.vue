<template>
  <div class="bg-gray-700">
    <div class="container mx-auto flex flex-row px-4 md:px-12 py-10">
      <div class="flex lg:w-1/3 text-white flex-col">
        <div class="font-bold mb-3">Social Media</div>
        <ul>
          <li>linkedin</li>
        </ul>
      </div>
      <div class="flex lg:w-1/3 text-white flex-col">
        <div class="font-bold mb-3">Contact Us</div>
        <ul>
          <li>danangkonang21@gmail.com</li>
        </ul>
      </div>
      <div class="flex lg:w-1/3 text-white font-bold">Contact Us</div>
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
