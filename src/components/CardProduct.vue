<script setup lang="ts">
import Rating from "./Rating.vue";

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
                <a :href="`/product/${product.id}`">
                  <span class="absolute inset-0"></span>
                  {{ product.title }}
                </a>
              </p>
              <p class="text-base font-medium text-[#898989]">{{ product.description.slice(1, 35) }}...</p>
              <p class="text-xl font-semibold text-[#3A3A3A]">U$ {{ product.price }}</p>
              <Rating :rate="product.rating.rate"/>
              <p>
                <span class="text-sm text-[#9F9F9F]">{{ product.rating.count }} Customer {{ product.rating.count > 1 ? 'Reviews' : 'Review'}}</span>
              </p>
            </div>
          </div>
  </div>
</template>
