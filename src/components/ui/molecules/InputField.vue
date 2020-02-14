<template>
  <div>
    <Label :text="label" class="block" />
    <TextInput
      @input="handleInput"
      v-model="content"
      :placeholder="placeholder"
      :type="type"
      class="mt-2 w-full rounded-input bg-white border-black border px-4 pt-inputt pb-inputb placeholder-neutral"
    />
  </div>
</template>

<script>
import Label from '@/components/ui/atoms/Label'
import TextInput from '@/components/ui/atoms/TextInput'

export default {
  name: 'input-field',
  props: {
    label: String,
    placeholder: String,
    type: String,
    value: String,
  },
  components: {
    Label,
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
