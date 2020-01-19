<template>
  <button
    class="font-semibold text-white rounded-button px-buttonx pt-buttont pb-buttonb"
    :class="buttonClass"
  >
    {{ label }}
  </button>
</template>

<script>
const buttonStates = ['default', 'warning']

export default {
  name: 'ui-button',
  props: {
    label: String,
    type: {
      validator: value => buttonStates.includes(value),
    },
  },
  data() {
    return {
      buttonClass: 'button-' + this.type,
    }
  },
}
</script>

<style lang="sass" scoped>
button
  @apply bg-tertiary
  &:hover
    @apply bg-tertiary-lighter
  &:active
    @apply bg-tertiary-darker

.button-warning
  @apply bg-secondary
  &:hover
    @apply bg-secondary-lighter
  &:active
    @apply bg-secondary-darker
</style>
