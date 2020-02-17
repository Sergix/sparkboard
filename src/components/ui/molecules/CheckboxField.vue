<template>
  <div class="flex">
    <Checkbox
      @input="handleInput"
      v-model="content"
      :id="name"
      class="mr-4"
      v-bind:checked="checked"
    />
    <label :for="name" class="text-sm">{{ label }}</label>
  </div>
</template>

<script>
import Checkbox from '@/components/ui/atoms/Checkbox'

export default {
  name: 'checkbox-field',
  props: {
    name: String,
    label: String,
    checked: Boolean,
    value: Boolean,
  },
  components: {
    Checkbox,
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
