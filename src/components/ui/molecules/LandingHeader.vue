<template>
  <header
    class="flex flex-rowjustify-center items-center p-4 mt-4 w-full max-w-3/4 mr-auto ml-auto mb-24"
  >
    <figure class="logo flex-1">
      <router-link to="/"
        ><SectionImage class="w-logo" src="logo/logo.svg" alt="Sparkboard"
      /></router-link>
    </figure>
    <router-link to="login">
      <ActionButton
        class="rounded-full border border-black pt-buttont pb-buttonb px-16"
        label="Create your board"
      />
    </router-link>
  </header>
</template>

<script>
import ActionButton from '@/components/ui/atoms/ActionButton'
import SectionImage from '@/components/ui/atoms/SectionImage'

export default {
  name: 'page-header',
  components: {
    ActionButton,
    SectionImage,
  },
}
</script>
