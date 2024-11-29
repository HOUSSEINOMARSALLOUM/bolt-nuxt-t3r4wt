<template>
  <header class="w-full bg-white/90 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold text-primary">
            AI Platform
          </NuxtLink>
        </div>
        
        <nav class="hidden md:flex space-x-8">
          <NuxtLink v-for="item in navigation" 
            :key="item.path" 
            :to="item.path"
            class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <div class="hidden md:flex items-center space-x-4">
          <ClientOnly>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-primary">
              <LinkedinIcon class="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-primary">
              <YoutubeIcon class="w-5 h-5" />
            </a>
          </ClientOnly>
        </div>

        <ClientOnly>
          <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
            <MenuIcon v-if="!isMenuOpen" class="w-6 h-6" />
            <XIcon v-else class="w-6 h-6" />
          </button>
        </ClientOnly>
      </div>
    </div>

    <ClientOnly>
      <div v-show="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink v-for="item in navigation" 
            :key="item.path" 
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LinkedinIcon, YoutubeIcon, MenuIcon, XIcon } from 'lucide-vue-next'
import { useNavigation } from '~/composables/useNavigation'

const isMenuOpen = ref(false)
const { navigation } = useNavigation()
</script>