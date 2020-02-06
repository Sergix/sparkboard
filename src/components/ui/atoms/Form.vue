<template>
  <form
    class="rounded-input px-12 pt-6 pb-8"
    @submit="$emit('submit')"
    @keypress="keyPress"
  >
    <h2 class="text-center font-semibold text-4xl mb-6">{{ title }}</h2>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'ui-form',
  props: {
    title: String,
  },
  methods: {
    keyPress(event) {
      if (event.key === 'Enter') {
        this.$emit('submit')
      }
    },
  },
}
</script>
