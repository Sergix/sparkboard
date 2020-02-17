<template>
  <input
    @input="handleInput"
    v-model="content"
    type="checkbox"
    v-bind:checked="checked"
  />
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checked: Boolean,
    value: Boolean,
  },
  data() {
    return {
      content: this.value,
    }
  },
  methods: {
    handleInput() {
      // inverted value for some reason
      this.$emit('input', !this.content)
    },
  },
}
</script>
