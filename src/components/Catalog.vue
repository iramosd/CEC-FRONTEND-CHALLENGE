<script setup lang="ts">
import { useProducts } from "../composables/useProducts.ts";
import CardProduct from "./CardProduct.vue";

const props = defineProps({
  category:{
    type: String,
    default: null,
    required: false,
  },
  page:{
    type: Number,
    default: 1,
  }
});

const { error, products, getProducts, getProductsByCategory } = useProducts();

if(props.category)
  await getProductsByCategory(props.category);
else
  await getProducts(props.page);
</script>

<template>
    <CardProduct v-for="product in products" :product/>
</template>
