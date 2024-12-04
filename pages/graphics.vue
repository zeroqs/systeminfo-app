<script setup lang="ts">
import type { GraphicsData } from '~/server/api/graphics'

const { data } = await useFetch<GraphicsData>('/api/graphics')
</script>

<template>
  <main class="container mx-auto p-4 space-y-6">
    <div v-if="data" class="space-y-6">
      <h2 class="text-2xl font-bold mb-4">
        Graphics Information
      </h2>

      <h3 class="text-xl font-semibold">
        Graphics Controllers
      </h3>
      <ul class="space-y-4">
        <li
          v-for="(controller, index) in data.graphics.controllers"
          :key="index"
          class="p-4 rounded-lg bg-gray-900"
        >
          <p>
            <strong>Vendor:</strong> {{ controller.vendor }}
          </p>
          <p><strong>Model:</strong> {{ controller.model }}</p>
          <p><strong>Bus:</strong> {{ controller.bus }}</p>
          <p>
            <strong>VRAM:</strong>
            {{ controller.vramDynamic ? 'Dynamic' : controller.vram ? `${controller.vram} MB` : 'Unknown' }}
          </p>
          <p><strong>Cores:</strong> {{ controller.cores }}</p>
          <p><strong>Vendor ID:</strong> {{ controller.vendorId }}</p>
          <p><strong>External:</strong> {{ controller.external ? 'Yes' : 'No' }}</p>
        </li>
      </ul>

      <h3 class="text-xl font-semibold mt-6">
        Displays
      </h3>
      <ul class="space-y-4">
        <li
          v-for="(display, index) in data.graphics.displays"
          :key="index"
          class="p-4 rounded-lg bg-gray-900"
        >
          <p><strong>Vendor:</strong> {{ display.vendor }}</p>
          <p><strong>Model:</strong> {{ display.model }}</p>
          <p><strong>Main Display:</strong> {{ display.main ? 'Yes' : 'No' }}</p>
          <p><strong>Built-in:</strong> {{ display.builtin ? 'Yes' : 'No' }}</p>
          <p><strong>Resolution:</strong> {{ display.resolutionX }} x {{ display.resolutionY }}</p>
          <p><strong>Current Resolution:</strong> {{ display.currentResX }} x {{ display.currentResY }}</p>
          <p><strong>Refresh Rate:</strong> {{ display.currentRefreshRate }} Hz</p>
          <p v-if="display.sizeX && display.sizeY">
            <strong>Physical Size:</strong> {{ display.sizeX }} mm x {{ display.sizeY }} mm
          </p>
          <p><strong>Connection:</strong> {{ display.connection }}</p>
        </li>
      </ul>
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
