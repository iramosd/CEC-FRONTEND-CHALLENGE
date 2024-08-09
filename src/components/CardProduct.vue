<script setup lang="ts">
const props = defineProps({
  product:{
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div class="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
    <div class="p-0">
     <div class="group">
        <img :src="product.image" :alt="product.description" class="object-contain h-48 w-96">
        <div class="flex justify-center opacity-0 absolute inset-0 bg-grey-transparent hover:opacity-100">
          <div class="absolute mt-[175px]">
            <button class="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-semibold px-14 py-3">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    <a :href="`/product/${product.id}`">
      <div class="p-0 flex flex-col items-start gap-2 pl-4">
        <h3 class="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-grey-dark">{{ product.title }}</h3>
        <span class="font-medium text-base leading-6 text-grey truncate w-64">{{ product.description }}</span>
        <div class="flex gap-4 items-center">
          <span class="font-semibold text-xl leading-[30px] pb-[30px] text-grey-dark">U$ {{ product.price }}</span>
        </div>
      </div>
    </a>
  </div>
<!--  <div class="mt-6 space-y-12 lg:grid lg:gap-x-6 lg:space-y-0 w-[90%]">
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
            </div>
          </div>
  </div>-->
</template>
