<script setup lang="ts">
import { useProducts } from "../composables/useProducts.ts";
import CardProduct from "./CardProduct.vue";
import Pagination from "./Pagination.vue";

const props = defineProps({
  category:{
    type: String,
    default: null,
    required: false,
  }
});

const { error, products, getProducts, getProductsByCategory } = useProducts();

if(props.category)
  await getProductsByCategory(props.category);
else
  await getProducts();

</script>

<template>
    <CardProduct v-for="product in products" :product/>
  <div class="w-full">
    <Pagination/>
  </div>
</template>
