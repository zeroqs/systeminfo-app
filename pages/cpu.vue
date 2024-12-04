<script setup lang="ts">
import type { CpuData } from '~/server/api/cpu'

const { data } = await useFetch<CpuData>('/api/cpu')
</script>

<template>
  <main class="container mx-auto p-4 space-y-6">
    <div v-if="data" class="space-y-6">
      <section>
        <h2 class="text-2xl font-bold mb-4">
          CPU Information
        </h2>
        <div class="grid grid-cols-2 gap-4 bg-gray-900 p-4 rounded-lg shadow">
          <div><strong>Manufacturer:</strong> {{ data.cpu.manufacturer }}</div>
          <div><strong>Brand:</strong> {{ data.cpu.brand }}</div>
          <div><strong>Vendor:</strong> {{ data.cpu.vendor }}</div>
          <div><strong>Speed:</strong> {{ data.cpu.speed }} GHz</div>
          <div><strong>Cores:</strong> {{ data.cpu.cores }}</div>
          <div><strong>Performance Cores:</strong> {{ data.cpu.performanceCores }}</div>
          <div><strong>Efficiency Cores:</strong> {{ data.cpu.efficiencyCores }}</div>
          <div><strong>Cache L1D:</strong> {{ data.cpu.cache.l1d }} Bytes</div>
          <div><strong>Cache L1I:</strong> {{ data.cpu.cache.l1i }} Bytes</div>
          <div><strong>Cache L2:</strong> {{ data.cpu.cache.l2 }} Bytes</div>
          <div><strong>Virtualization:</strong> {{ data.cpu.virtualization ? 'Enabled' : 'Disabled' }}</div>
        </div>
      </section>
    </div>

    <div v-else>
      <USkeleton class="h-8 w-[250px]" />
      <USkeleton class="h-56 w-full" />
    </div>
  </main>
</template>
