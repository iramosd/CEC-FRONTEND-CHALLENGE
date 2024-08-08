<script setup lang="ts">
const props = defineProps({
  product:{
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div class="mt-6 space-y-12 lg:grid lg:gap-x-6 lg:space-y-0 w-[90%]">
          <div class="group relative bg-[#F4F5F7] border-solid border-2">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img :src="product.image" :alt="product.description" class="object-contain h-48 w-96">
            </div>
            <div class="pl-4">
              <p class="text-2xl font-semibold text-[#3A3A3A]">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  {{ product.title }}
                </a>
              </p>
              <p class="text-base font-medium text-[#898989]">{{ product.description.slice(1, 35) }}...</p>
              <p class="text-xl font-semibold text-[#3A3A3A]">U$ {{ product.price }}</p>
            </div>
          </div>

  </div>

<!--  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">{{ product.title }}</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.image" :alt="product.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Basic Tee
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> -->

</template>
