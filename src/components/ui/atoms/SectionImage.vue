<template>
  <img :src="imagePath" :alt="alt" />
</template>

<script>
export default {
  name: 'section-image',
  props: {
    src: String,
    alt: String,
  },
  computed: {
    imagePath() {
      return require('@/assets/img/' + this.src)
    },
  },
}
</script>
