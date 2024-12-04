export default defineAppConfig({
  ui: {
    strategy: 'override',
    card: {
      base: 'w-64',
      body: {
        base: 'flex justify-center items-center',
        padding: 'px-2 py-3 sm:p-4',

      },
      background: 'bg-inherit hover:dark:bg-gray-900 cursor-pointer transition-colors',
      divide: '',
    },
  },
})
