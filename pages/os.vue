<script setup lang="ts">
import type { OsData } from '~/server/api/os'

const { data } = await useFetch<OsData>('/api/os')
</script>

<template>
  <main class="container mx-auto p-4 space-y-6">
    <section v-if="data" class="space-y-6">
      <h2 class="text-2xl font-bold mb-4">
        Operating System Information
      </h2>
      <ul class="space-y-2">
        <li>
          <strong>Platform:</strong> {{ data.os.platform }}
        </li>
        <li>
          <strong>Distro:</strong> {{ data.os.distro }}
        </li>
        <li>
          <strong>Release:</strong> {{ data.os.release }}
        </li>
        <li>
          <strong>Codename:</strong> {{ data.os.codename }}
        </li>
        <li>
          <strong>Kernel:</strong> {{ data.os.kernel }}
        </li>
        <li>
          <strong>Architecture:</strong> {{ data.os.arch }}
        </li>
        <li>
          <strong>Hostname:</strong> {{ data.os.hostname }}
        </li>
        <li>
          <strong>FQDN:</strong> {{ data.os.fqdn }}
        </li>
        <li>
          <strong>Codepage:</strong> {{ data.os.codepage }}
        </li>
        <li>
          <strong>Serial Number:</strong> {{ data.os.serial }}
        </li>
        <li>
          <strong>Build:</strong> {{ data.os.build }}
        </li>
        <li>
          <strong>UEFI:</strong> {{ data.os.uefi ? 'Yes' : 'No' }}
        </li>
      </ul>
    </section>

    <div v-else>
      <USkeleton class="h-8 w-[250px] mb-4" />
      <USkeleton class="h-56 w-full" />
    </div>
  </main>
</template>
