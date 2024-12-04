<script setup lang="ts">
import { cards } from '~/utils/constants'
</script>

<template>
  <div class="h-dvh content-center">
    <div class=" flex justify-start flex-wrap gap-4 px-4 max-w-[1125px] m-auto">
      <NuxtLink v-for="card in cards" :key="card.title" :to="card.href">
        <UCard>
          <component :is="card.icon" size="128" stroke="1.5" />

          <template #footer>
            <h1 class="text-center scroll-m-20 text-xl font-semibold tracking-tight">
              {{ card.title }}
            </h1>
          </template>
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>
