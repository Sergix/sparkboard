<template>
  <input type="checkbox" v-bind:checked="checked" />
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checked: Boolean,
  },
}
</script>
