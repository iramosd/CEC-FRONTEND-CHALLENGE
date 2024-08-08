<script setup lang="ts">
import { useCategories } from "../../composables/useCategories.ts";

const {categories, error, getCategories} = useCategories();
await getCategories();

</script>

<template>
<aside>

</aside>
</template>
