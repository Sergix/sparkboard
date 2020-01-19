<template>
  <label class="font-medium text-2xl">{{ text }}</label>
</template>

<script>
export default {
  name: 'label',
  props: {
    text: String,
  },
}
</script>
