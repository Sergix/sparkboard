<template>
  <button
    class="font-semibold rounded-button px-buttonx pt-buttont pb-buttonb"
    :class="buttonClass"
  >
    {{ label }}
  </button>
</template>

<script>
const buttonStates = ['default', 'warning', 'action']

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
  @apply text-white
  @apply bg-tertiary
  &:hover
    @apply bg-tertiary-lighter
  &:active
    @apply bg-tertiary-darker

.button-warning
  @apply bg-secondary
  @apply text-white
  &:hover
    @apply bg-secondary-lighter
  &:active
    @apply bg-secondary-darker


.button-action
  @apply bg-white
  @apply px-10
  @apply text-black
  &:hover
    @apply text-gray-800
    @apply bg-white
  &:active
    @apply text-black
    @apply bg-gray-200
</style>
