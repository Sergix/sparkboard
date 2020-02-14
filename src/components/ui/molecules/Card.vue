<template>
  <figure
    class="flex flex-col border border-gray-400 rounded-card overflow-hidden shadow-xl bg-white"
  >
    <div class="overflow-hidden max-h-2/3 flex-1">
      <img class="object-contain card-img" :src="img" alt="Card Example" />
    </div>
    <div class="mx-6 mt-2 mb-4">
      <h4>{{ title }}</h4>
      <figcaption>
        {{ descToggle ? desc : shortDesc }}
        <span
          class="text-neutral cursor-pointer"
          v-show="showDescExpander"
          @click="toggleDesc"
        >
          ...
        </span>
      </figcaption>
    </div>
    <div class="flex flex-row self-end mr-4">
      <span class="rounded-full bg-secondary w-16 h-2 self-end mr-2"></span>
      <span class="rounded-full bg-tertiary w-16 h-2 self-end mr-2"></span>
    </div>
  </figure>
</template>

<script>
const MAX_DESC_LENGTH = 100

export default {
  name: 'card',
  props: {
    title: String,
    desc: String,
    img: String,
  },
  data() {
    return {
      descToggle: false,
    }
  },
  computed: {
    showDescExpander() {
      return this.desc.length > MAX_DESC_LENGTH
    },
    shortDesc() {
      return this.showDescExpander
        ? this.desc.substring(0, MAX_DESC_LENGTH)
        : this.desc
    },
  },
  components: {},
  methods: {
    toggleDesc() {
      this.descToggle = !this.descToggle
    },
  },
}
</script>
