<template>
  <section class="relative min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
          <span class="block">Next Generation</span>
          <span class="block text-brand-orange">AI Infrastructure</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Building the future of artificial intelligence with ethical principles and cutting-edge technology.
        </p>
        <CallToAction />
      </div>

      <div class="mt-10 max-w-3xl mx-auto">
        <VideoPlayer />
      </div>

      <FeaturesGrid />
    </div>

    <TrustedBy />
  </section>
</template>

<script setup lang="ts">
// Component imports are automatic in Nuxt 3
</script>