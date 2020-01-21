<template>
  <div id="app" class="flex flex-col h-full">
    <PageHeader class="z-10" />
    <div class="flex-grow">
      <vue-page-transition name="fade-in-left">
        <router-view />
      </vue-page-transition>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/ui/molecules/PageHeader'
import PageFooter from '@/components/ui/molecules/PageFooter'

export default {
  components: {
    PageHeader,
    PageFooter,
  },
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
