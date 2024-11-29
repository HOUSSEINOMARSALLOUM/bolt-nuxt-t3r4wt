<template>
  <footer class="bg-primary text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-xl font-bold mb-4">AI Platform</h3>
          <p class="text-gray-300 max-w-md">
            Building the future of artificial intelligence with ethical principles and cutting-edge technology.
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in navigation" :key="item.path">
              <NuxtLink :to="item.path" class="text-gray-300 hover:text-white">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Connect</h4>
          <div class="flex space-x-4">
            <ClientOnly>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
                <LinkedinIcon class="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
                <YoutubeIcon class="w-6 h-6" />
              </a>
            </ClientOnly>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-700">
        <p class="text-center text-gray-300">
          © {{ new Date().getFullYear() }} AI Platform. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { LinkedinIcon, YoutubeIcon } from 'lucide-vue-next'
import { useNavigation } from '~/composables/useNavigation'

const { navigation } = useNavigation()
</script>