<template>
  <div class="bg-white py-12 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
        Trusted by industry leaders
      </p>
      <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div v-for="i in 5" :key="i" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            :src="`https://picsum.photos/seed/logo${i}/200/100`"
            :alt="`Company ${i}`"
            class="h-12 object-contain filter grayscale opacity-50 hover:opacity-100 transition-opacity"
          >
        </div>
      </div>
    </div>
  </div>
</template>