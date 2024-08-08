<script setup lang="ts">
import { ref } from "vue";
import { useProducts } from "../composables/useProducts.ts";
import Rating from "./Rating.vue";

const props = defineProps({
  id:{
    type: String,
    required: true
  }
});

const { error, product, getProduct } = useProducts();
const count = ref(0);
await getProduct(props.id);

</script>

<template>
  <header>
    <div class="bg-[#F9F1E7] text-[#9F9F9F] w-full p-8 lg:py-10 lg:px-20 flex gap-2 lg:gap-6">
      <a class="flex items-center" href="/">Home</a>
      <img src="/icons/arrow.svg" alt="arrow">
      <a class="flex items-center" href="/">{{ product.category }}</a>
      <img src="/icons/arrow.svg" alt="arrow">
      <span class="w-[2px] bg-[#9F9F9F]"></span>
      <span class="text-black">{{ product.title }}</span>
    </div>
  </header>

  <div class="p-8 lg:px-20 lg:py-10 flex flex-col lg:flex-row gap-10 sm:gap-20">
    <div class="flex flex-col sm:flex-row w-full lg:w-1/2 gap-4 sm:gap-10">
      <div class="grid grid-cols-4 sm:flex sm:flex-col gap-2 sm:gap-6 w-full sm:w-2/12">
        <img class="object-contain sm:h-24 sm:w-24 rounded-lg sm:rounded-xl border-solid border-2" :src="product.image" alt="`${product.title}`">
      </div>
      <img class="order-first sm:order-last sm:w-9/12 object-contain rounded-lg sm:rounded-xl sm:h-[70vh] border-solid border-2" :src="product.image" :alt="`${product.title}`">
    </div>
    <div class="w-full lg:w-1/2 flex flex-col gap-5">
      <h3 class="text-[42px]">{{ product.title }}</h3>
      <p class="text-[#9F9F9F] text-2xl">U$ {{ product.price }}</p>
      <div class="flex gap-3">
        <Rating :rate="product.rating.rate"/>
        <span class="w-[1px] bg-[#9F9F9F]"></span>
        <span class="text-sm text-[#9F9F9F]">{{ product.rating.count }} Customer {{ product.rating.count > 1 ? 'Reviews' : 'Review'}}</span>
      </div>
      <p class="w-10/12">{{ product.description }}</p>
      <div class="flex flex-col gap-6">
        <div class="flex flex-row w-full gap-4">
          <div class="rounded-lg flex justify-between items-center p-3 border border-[#9F9F9F]">
            <button @click="count--" class="hover:bg-gray-300 duration-300 rounded-full w-5 h-5 flex items-center justify-center">-</button>
            <span>{{ count }}</span>
            <button  @click="count++" class="hover:bg-gray-300 duration-300 rounded-full w-5 h-5 flex items-center justify-center">+</button>
          </div>
          <button class="rounded-lg disabled:opacity-50 disabled:bg-black disabled:text-white text-xl p-3 border border-black hover:bg-black hover:text-white duration-300">Add To Cart</button>
        </div>
      </div>
      <span class="h-[1px] bg-[#D9D9D9] my-8"></span>
      <div class="text-[#9F9F9F] flex flex-col gap-4">
          <div class="flex gap-3">
            <span class="w-20">SKU</span>
            <span>:</span><span>SS00{{product.id}}</span>
          </div>
        <div class="flex gap-3">
          <span class="w-20">Category</span><span>:</span><span>{{ product.category }}</span></div>
        <div class="flex gap-3">
          <span class="w-20">Share</span><span>:</span>
          <div class="text-black flex gap-4 text-2xl">
            <a href="#"><img src="/icons/facebook.svg" alt="facebook"></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="linkedin"></a>
            <a href="#"><img src="/icons/twitter.svg" alt="twitter"></a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
