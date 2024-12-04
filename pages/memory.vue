<script setup lang="ts">
import type { MemData } from '~/server/api/memory'

const { data } = await useFetch<MemData>('/api/memory')

const memoryUsagePercent = computed(() => {
  const memory = data.value?.memory
  return memory ? (memory.used / memory.total) * 100 : 0
})

const memoryColor = computed(() => {
  const percent = memoryUsagePercent.value
  switch (true) {
    case percent < 50:
      return 'blue'
    case percent < 75:
      return 'amber'
    case percent < 90:
      return 'orange'
    default:
      return 'red'
  }
})

const memoryStatus = computed(() => {
  const percent = memoryUsagePercent.value
  switch (true) {
    case percent < 50:
      return 'Low usage'
    case percent < 75:
      return 'Moderate usage'
    case percent < 90:
      return 'High usage'
    default:
      return 'Critical usage'
  }
})

function bytesToGB(bytes: number): string {
  return `${(bytes / 1_073_741_824).toFixed(2)} GB`
}
</script>

<template>
  <main class="container mx-auto p-4 space-y-6">
    <div v-if="data" class="space-y-6">
      <section>
        <h2 class="text-2xl font-bold mb-4">
          Memory Information
        </h2>
        <div class="pt-4 mb-10">
          <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
            Memory Usage
          </h4>
          <UProgress :value="data.memory.used" :max="data.memory.total" :color="memoryColor">
            <template #indicator="{ percent }">
              <div class="text-right" :style="{ width: `${percent}%` }">
                <span v-if="memoryUsagePercent < 50" class="text-blue-500">{{ memoryStatus }}</span>
                <span v-else-if="memoryUsagePercent < 75" class="text-amber-500">{{ memoryStatus }}</span>
                <span v-else-if="memoryUsagePercent < 90" class="text-orange-500">{{ memoryStatus }}</span>
                <span v-else class="text-red-500 font-bold">{{ memoryStatus }}</span>
              </div>
            </template>
          </UProgress>

          <p class="text-gray-600 pt-2">
            <strong>Used:</strong> {{ (data.memory.used / 1_073_741_824).toFixed(2) }} GB /
            <strong>Total:</strong> {{ (data.memory.total / 1_073_741_824).toFixed(2) }} GB
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 bg-gray-900 p-4 rounded-lg shadow">
          <div><strong>Total:</strong> {{ bytesToGB(data.memory.total) }}</div>
          <div><strong>Free:</strong> {{ bytesToGB(data.memory.free) }}</div>
          <div><strong>Used:</strong> {{ bytesToGB(data.memory.used) }}</div>
          <div><strong>Active:</strong> {{ bytesToGB(data.memory.active) }}</div>
          <div><strong>Available:</strong> {{ bytesToGB(data.memory.available) }}</div>
          <div><strong>Buffers:</strong> {{ bytesToGB(data.memory.buffers) }}</div>
          <div><strong>Cached:</strong> {{ bytesToGB(data.memory.cached) }}</div>
          <div><strong>Slab:</strong> {{ bytesToGB(data.memory.slab) }}</div>
          <div><strong>Buffcache:</strong> {{ bytesToGB(data.memory.buffcache) }}</div>
          <div><strong>Swap Total:</strong> {{ bytesToGB(data.memory.swaptotal) }}</div>
          <div><strong>Swap Used:</strong> {{ bytesToGB(data.memory.swapused) }}</div>
          <div><strong>Swap Free:</strong> {{ bytesToGB(data.memory.swapfree) }}</div>
          <div v-if="data.memory.writeback">
            <strong>Writeback:</strong> {{ bytesToGB(data.memory.writeback) }}
          </div>
          <div v-if="data.memory.dirty">
            <strong>Dirty:</strong> {{ bytesToGB(data.memory.dirty) }}
          </div>
        </div>
      </section>
    </div>

    <div v-else>
      <USkeleton class="h-8 w-[250px] mb-4" />
      <USkeleton class="h-56 w-full" />
    </div>
  </main>
</template>
