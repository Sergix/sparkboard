<template>
  <figure
    class="flex flex-col border border-gray-400 rounded-card m-12 overflow-hidden shadow-xl"
  >
    <div class="overflow-hidden max-h-2/3 flex-1">
      <SectionImage
        class="object-contain card-img"
        :src="img"
        alt="Card Example"
      />
    </div>
    <div class="ml-6 mt-2 mb-4">
      <h4>{{ title }}</h4>
      <figcaption>{{ desc }}</figcaption>
    </div>
    <div class="flex flex-row self-end mr-4">
      <span class="rounded-full bg-secondary w-16 h-2 self-end mr-2"></span>
      <span class="rounded-full bg-tertiary w-16 h-2 self-end mr-2"></span>
    </div>
  </figure>
</template>

<script>
import SectionImage from '@/components/ui/atoms/SectionImage'

export default {
  name: 'card',
  props: {
    title: String,
    desc: String,
    img: String,
  },
  components: {
    SectionImage,
  },
}
</script>
