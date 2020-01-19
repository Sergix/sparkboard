<template>
  <div>
    <Label :text="label" class="block" />
    <TextInput :placeholder="placeholder" :type="type" class="mt-2 w-full" />
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
  },
  components: {
    Label,
    TextInput,
  },
}
</script>
