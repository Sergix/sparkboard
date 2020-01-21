<template>
  <div id="app" class="flex flex-col h-full">
    <div class="flex-grow">
      <router-view />
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '@/components/ui/molecules/PageFooter'

export default {
  components: {
    PageFooter,
  },
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
