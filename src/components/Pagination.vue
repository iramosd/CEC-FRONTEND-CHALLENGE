<script setup lang="ts">
import { useProducts } from "../composables/useProducts";

const props = defineProps({
  category: {
    type: String,
    required: false,
    default: null,
  },
  page: {
    type: Number,
    default: 1,
  }
});

const { products, getProducts, getProductsByCategory } = useProducts();
let baseUrl: string;
if(props.category === null) {
  await getProducts();
  baseUrl = '/products/';
}
else {
  await getProductsByCategory(props.category);
  baseUrl = '/products/category/';
}

</script>

<template>
  <p><br/></p>
    <div class="w-full flex justify-center gap-5 text-[20px]" v-if="products !== undefined && products.length > 5">
      <a v-if="parseInt(page) > 1" class="text-black px-8 h-12 py-3 bg-[#F9F1E7] no-underline rounded" :href="baseUrl+(parseInt(page)-1)">Previous</a>
      <a v-for="n in Math.ceil(products.length / 5)" :href="baseUrl+n" class="text-black px-6 py-3 bg-[#F9F1E7] no-underline rounded" :class="parseInt(page) === n ? 'bg-[#b88e2f]': 'bg-[#F9F1E7]'">{{ n }}</a>
      <a v-if="parseInt(page) < Math.ceil(products.length / 5)" class="text-black px-8 h-12 py-3 bg-[#F9F1E7] no-underline rounded" :href="baseUrl+(parseInt(page)+1)">Next</a>
    </div>
  <p><br/></p>
</template>
