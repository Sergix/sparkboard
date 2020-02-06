<template>
  <button
    :class="buttonClass"
    class="pt-buttont pb-buttonb px-buttonx rounded-button text-white font-semibold"
    type="button"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
const formButtonStates = ['submit', 'warning']

export default {
  name: 'form-button',
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'submit',
      validator: value => formButtonStates.includes(value),
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
.button-submit
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
