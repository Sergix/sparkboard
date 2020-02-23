<template>
  <button type="button">
    <SectionImage :src="path" :alt="name" />
  </button>
</template>

<script>
import SectionImage from '@/components/ui/atoms/SectionImage'

export default {
  name: 'icon-button',
  components: {
    SectionImage,
  },
  props: {
    icon: String,
    name: String,
  },
  data() {
    return {
      path: `icons/${this.icon}.svg`,
    }
  },
}
</script>
