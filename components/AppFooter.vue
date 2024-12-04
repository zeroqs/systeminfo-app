<template>
  <footer class="flex items-center justify-center bottom-0 w-full text-sm text-gray-500 px-6 pb-6" :class="$route.path === '/' ? 'fixed' : 'sm:fixed mt-6'">
    <p class="text-center">
      Made by <a href="https://github.com/zeroqs" target="_blank">zeroqs</a>
      <span class="inline-block mx-1.5">&middot;</span>Deployed on
      <a href="#">NuxtHub</a><span class="inline-block mx-1.5">&middot;</span>
      Source code on <a href="https://github.com/zeroqs/systeminfo-app" target="_blank">GitHub</a>
    </p>
  </footer>
</template>

<style lang="postcss">
.light {
  @apply bg-gray-100 text-gray-900;
}
.dark {
  @apply bg-gray-950 text-gray-50;
}

footer a {
  @apply text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 dark:hover:text-white hover:text-gray-900;
}
</style>
