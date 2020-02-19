<template>
  <nav class="flex flex-row text-2xl items-center pl-2 pr-12">
    <router-link to="/">
      <SectionImage
        class="w-logo py-4 pr-4"
        src="logo/logo.svg"
        alt="Sparkboard"
      />
    </router-link>
    <div class="flex-1 flex flex-row items-center ml-32 mt-1">
      <router-link to="dashboard">Boards</router-link>
      <router-link to="dashboard">Settings</router-link>
      <router-link to="dashboard">Help</router-link>
    </div>
    <a class="mt-1 text-tertiary cursor-pointer" to="#" @click="logout">
      Logout
    </a>
  </nav>
</template>

<script>
// import RouteLink from '@/components/ui/atoms/RouteLink'
import SectionImage from '@/components/ui/atoms/SectionImage'

export default {
  name: 'account-header',
  components: {
    // RouteLink,
    SectionImage,
  },
  methods: {
    logout() {
      this.$store.dispatch('account/logout')
    },
  },
}
</script>

<style lang="sass" scoped>
a
  @apply mr-16
  @apply font-medium
</style>
