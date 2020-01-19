<template>
  <input
    :name="name"
    :placeholder="placeholder"
    :type="type"
    class="rounded-input bg-white border-black border px-4 pt-inputt pb-inputb placeholder-neutral"
  />
</template>

<script>
const inputStates = ['text', 'password']

export default {
  name: 'text-input',
  props: {
    name: String,
    placeholder: String,
    type: {
      validator: value => inputStates.includes(value),
    },
  },
}
</script>
