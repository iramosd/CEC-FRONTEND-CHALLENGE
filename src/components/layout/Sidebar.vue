<script setup lang="ts">
import { useCategories } from "../../composables/useCategories.ts";

const {categories, error, getCategories} = useCategories();
await getCategories();

</script>

<template>
<aside class="w-[135px] font-[Poppins]">
  <div class="pt-[39px] pl-[100px]">
    <h2 class="text-[#3A3A3A] font-semibold text-[24px] leading-[36px]">
      Categories
    </h2>
    <ul class="text-[#B88E2F] font-semibold text-[20px] leading-[30px]">
      <li v-for="category in categories">{{ category }}</li>
    </ul>
  </div>
</aside>
</template>
