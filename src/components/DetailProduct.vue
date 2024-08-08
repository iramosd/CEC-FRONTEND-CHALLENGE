<script setup lang="ts">
import { useProducts } from "../composables/useProducts.ts";

const props = defineProps({
  id:{
    type: String,
    required: true
  }
});

const { error, product, getProduct } = useProducts();
await getProduct(props.id);

</script>

<template>
  <p>{{ product }}</p>
</template>
