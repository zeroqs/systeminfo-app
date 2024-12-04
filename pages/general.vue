<script setup lang="ts">
import type { GeneralApiResponse } from '~/server/api/general'

const { data } = await useFetch<GeneralApiResponse>('/api/general')
</script>

<template>
  <main class="container mx-auto p-4 space-y-6">
    <div v-if="data" class="space-y-6">
      <section>
        <h2 class="text-2xl font-bold mb-4">
          CPU Information
        </h2>
        <div class="grid grid-cols-2 gap-4 bg-gray-900 p-4 rounded-lg shadow">
          <div><strong>Manufacturer:</strong> {{ data.general.cpu.manufacturer }}</div>
          <div><strong>Brand:</strong> {{ data.general.cpu.brand }}</div>
          <div><strong>Vendor:</strong> {{ data.general.cpu.vendor }}</div>
          <div><strong>Speed:</strong> {{ data.general.cpu.speed }} GHz</div>
          <div><strong>Cores:</strong> {{ data.general.cpu.cores }}</div>
          <div><strong>Performance Cores:</strong> {{ data.general.cpu.performanceCores }}</div>
          <div><strong>Efficiency Cores:</strong> {{ data.general.cpu.efficiencyCores }}</div>
          <div><strong>Cache L1D:</strong> {{ data.general.cpu.cache.l1d }} Bytes</div>
          <div><strong>Cache L1I:</strong> {{ data.general.cpu.cache.l1i }} Bytes</div>
          <div><strong>Cache L2:</strong> {{ data.general.cpu.cache.l2 }} Bytes</div>
          <div><strong>Virtualization:</strong> {{ data.general.cpu.virtualization ? 'Enabled' : 'Disabled' }}</div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">
          Operating System Information
        </h2>
        <div class="bg-gray-900 p-4 rounded-lg shadow">
          <div><strong>Platform:</strong> {{ data.general.osInfo.platform }}</div>
          <div><strong>Release:</strong> {{ data.general.osInfo.release }}</div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">
          System Information
        </h2>
        <div class="bg-gray-900 p-4 rounded-lg shadow">
          <div><strong>Model:</strong> {{ data.general.system.model }}</div>
          <div><strong>Manufacturer:</strong> {{ data.general.system.manufacturer }}</div>
        </div>
      </section>
    </div>

    <div v-else>
      <USkeleton class="h-8 w-[250px] mb-4" />
      <USkeleton class="h-56 w-full" />

      <USkeleton class="h-8 w-[250px] mb-4" />
      <USkeleton class="h-40 w-full" />

      <USkeleton class="h-8 w-[250px] mb-4" />
      <USkeleton class="h-20 w-full" />
    </div>
  </main>
</template>
