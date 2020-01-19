<template>
  <form class="bg-primary rounded-input px-12 pt-6 pb-8">
    <h2 class="text-center font-bold text-4xl mb-6">{{ title }}</h2>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'login-form',
  props: {
    title: String,
  },
}
</script>
