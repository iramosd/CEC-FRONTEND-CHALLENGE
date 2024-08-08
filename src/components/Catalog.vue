<script setup lang="ts">
import { useProducts } from "../composables/useProducts.ts";
import CardProduct from "./CardProduct.vue";
import Pagination from "./Pagination.vue";
const { error, products, getProducts } = useProducts();
await getProducts();
</script>

<template>
    <CardProduct v-for="product in products" :product/>
  <div class="w-full">
    <Pagination/>
  </div>
</template>
