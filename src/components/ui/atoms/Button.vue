<template>
  <button class="button">{{ label }}</button>
</template>

<script>
export default {
  name: 'ui-button',
  props: {
    label: String,
    color: String,
  },
  data: function() {
    return {
      style: {
        '--color': this.color,
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.button
  border: none
  border-radius: 7px
  background-color: #00473e
  color: white
  font-family: $type-ui
  padding: 1em 2em 1.05em 2em
</style>
