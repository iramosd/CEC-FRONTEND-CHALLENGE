<script setup lang="ts">

</script>

<template>
    <footer class="border-t-[1px] border-[#D9D9D9]">
      <div class="grid gap-8 grid-cols-2 lg:grid-cols-4 p-8 lg:p-20">
        <div class="flex flex-col gap-6 lg:gap-12">
          <p class="text-2xl font-bold">Funiro.</p>
          <p class="text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables, <br> FL 33134 USA</p>
        </div>
        <div class="flex flex-col lg:items-center">
          <div class="flex flex-col gap-6 lg:gap-12">
            <p class="text-[#9F9F9F] font-medium">Links</p>
            <div class="flex flex-col gap-3 lg:gap-10 font-medium">
              <a class="w-fit relative after:content-[''] after:absolute after:bg-black after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px]" href="/">Home</a>
              <a class="w-fit relative after:content-[''] after:absolute after:bg-black after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px]" href="/shop">Shop</a>
              <a class="w-fit relative after:content-[''] after:absolute after:bg-black after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px]" href="/blog">Blog</a>
              <a class="w-fit relative after:content-[''] after:absolute after:bg-black after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px]" href="/contact">Contact</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:items-center">
          <div class="flex flex-col gap-6 lg:gap-12">
            <p class="text-[#9F9F9F] font-medium">Help</p>
            <div class="flex flex-col gap-3 lg:gap-10 font-medium">
              <a class="w-fit relative after:content-[''] after:absolute after:bg-black after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px]" href="/">Payment Options</a>
              <a class="w-fit relative after:content-[''] after:absolute after:bg-black after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px]" href="/">Returns</a>
              <a class="w-fit relative after:content-[''] after:absolute after:bg-black after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px]" href="/">Privacy Policies</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6 lg:gap-12">
          <p class="text-[#9F9F9F] font-medium">Newsletter</p>
          <form class="text-sm flex flex-col lg:flex-row gap-4 w-full" action="">
            <input class="focus:outline-none w-full sm:w-fit lg:w-52 border-b-[1px] border-black" placeholder="Enter Your Email Address" type="text">
            <button class="border-b-[1px] w-fit border-black font-medium">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div class="border-t-[1px] border-[#D9D9D9] mx-8 py-8 lg:mx-20 lg:py-10">
        <span>2024. All rights reserved</span>
      </div>
    </footer>

</template>