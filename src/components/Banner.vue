<script setup lang="ts">
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 z-10 backdrop-blur-sm bg-white bg-opacity-25"></div>
    <div class="text-black flex justify-center pb-6 lg:pb-0 items-end lg:items-center h-[24vh] lg:h-[40vh] bg-center bg-no-repeat bg-cover bg-[url(/banner.jpg)]">
      <div class="relative w-full gap-4 flex flex-col items-center z-20 px-8">
        <h2 class="z-20 font-semibold text-3xl lg:text-5xl">Shop</h2>
        <div class="z-20 flex gap-1"><a class="font-medium" href="/">Home</a><img src="/icons/arrow.svg" alt="arrow">
          <span>Shop</span>
        </div>
      </div>
    </div>
  </div>
</template>
