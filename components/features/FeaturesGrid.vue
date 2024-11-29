<template>
  <div class="mt-20">
    <h2 class="text-3xl font-bold text-center text-primary mb-12">Platform Features</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="feature in features" :key="feature.title" class="bg-white p-6 rounded-lg shadow-md">
        <component :is="feature.icon" class="w-8 h-8 text-brand-orange mb-4" />
        <h3 class="text-xl font-semibold text-primary mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BrainCircuit, Shield, Zap, Database, Users, LineChart } from 'lucide-vue-next'

const features = [
  {
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art machine learning models with our intuitive API.',
    icon: BrainCircuit
  },
  {
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security with end-to-end encryption and compliance.',
    icon: Shield
  },
  {
    title: 'High Performance',
    description: 'Lightning-fast inference with optimized hardware acceleration.',
    icon: Zap
  },
  {
    title: 'Scalable Storage',
    description: 'Flexible data storage solutions that grow with your needs.',
    icon: Database
  },
  {
    title: 'Team Collaboration',
    description: 'Built-in tools for seamless team coordination and sharing.',
    icon: Users
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into your AI model performance.',
    icon: LineChart
  }
]
</script>