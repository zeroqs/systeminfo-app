<script setup lang="ts">
import type { SystemData } from '~/server/api/system'

const { data } = await useFetch<SystemData>('/api/system')
</script>

<template>
  <main class="container mx-auto p-4 space-y-6">
    <div v-if="data" class="space-y-6">
      <section>
        <h2 class="text-2xl font-bold mb-4">
          System Information
        </h2>
        <div class="grid grid-cols-2 gap-4 bg-gray-900 p-4 rounded-lg shadow">
          <div><strong>Manufacturer:</strong> {{ data.system.manufacturer }}</div>
          <div><strong>Model:</strong> {{ data.system.model }}</div>
          <div><strong>Serial:</strong> {{ data.system.serial }}</div>
          <div v-if="data.system.raspberry">
            <strong>Raspberry manufacturer:</strong> {{ data.system.raspberry.manufacturer }}
            <strong>Raspberry processor:</strong> {{ data.system.raspberry.processor }}
            <strong>Raspberry revision:</strong> {{ data.system.raspberry.revision }}
            <strong>Raspberry type:</strong> {{ data.system.raspberry.type }}
          </div>
          <div><strong>Sku:</strong> {{ data.system.sku }}</div>
          <div><strong>Uuid:</strong> {{ data.system.uuid }}</div>
          <div><strong>Version:</strong> {{ data.system.version }}</div>
          <div><strong>Virtualization:</strong> {{ data.system.virtual ? 'Enabled' : 'Disabled' }}</div>
        </div>
      </section>
    </div>

    <div v-else>
      <USkeleton class="h-8 w-[250px] mb-4" />
      <USkeleton class="h-56 w-full" />
    </div>
  </main>
</template>
