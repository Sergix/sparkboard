<template>
  <TextInput
    :placeholder="placeholder"
    :type="type"
    :style="'width: ' + content.length + 'ch'"
    @input="handleInput"
    v-model="content"
  />
</template>

<script>
import TextInput from '@/components/ui/atoms/TextInput'

export default {
  name: 'variable-text-input',
  props: {
    placeholder: String,
    type: String,
    value: String,
  },
  components: {
    TextInput,
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
