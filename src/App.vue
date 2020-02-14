<template>
  <div id="app" class="flex flex-col h-full">
    <AccountHeader class="z-10" v-if="disabledRoutes.includes($route.name)" />
    <LandingHeader class="z-10" v-if="!disabledRoutes.includes($route.name)" />
    <div class="flex-grow">
      <vue-page-transition name="fade-in-left">
        <router-view />
      </vue-page-transition>
    </div>
    <LandingFooter v-if="!disabledRoutes.includes($route.name)" />
  </div>
</template>

<script>
import AccountHeader from '@/components/ui/molecules/AccountHeader'
import LandingHeader from '@/components/ui/molecules/LandingHeader'
import LandingFooter from '@/components/ui/molecules/LandingFooter'

export default {
  components: {
    AccountHeader,
    LandingHeader,
    LandingFooter,
  },
  data() {
    return {
      // don't include the standard header and footer on these pages
      disabledRoutes: ['board', 'dashboard'],
    }
  },
}
</script>

<style lang="sass">
//
// this decleration used to exist in globals.scss, but webpack cleaned
// the rule in that file so it was moved here
//
html, body
  @apply font-ui
  @apply text-print
  height: 100%
  margin: 0

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
