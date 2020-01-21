<template>
  <button
    class="action-button bg-white text-black hover:text-gray-800 font-medium"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'action-button',
  props: {
    label: String,
  },
}
</script>

<style lang="sass" scoped>
.action-button
  &:active
    @apply text-black
    @apply bg-gray-200
</style>
