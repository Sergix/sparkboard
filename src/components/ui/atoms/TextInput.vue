<template>
  <input
    :name="name"
    :placeholder="placeholder"
    :type="type"
    @input="handleInput"
    v-model="content"
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
    value: String,
  },
  data() {
    return {
      content: this.value,
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content)
    },
  },
}
</script>
