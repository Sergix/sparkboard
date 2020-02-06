<template>
  <nav class="flex flex-row text-2xl items-center pl-2 pr-12">
    <router-link to="/">
      <SectionImage class="w-logo p-4" src="logo/logo.svg" alt="Sparkboard" />
    </router-link>
    <div class="flex-1 flex flex-row items-center ml-32 mt-1">
      <RouteLink class="px-8" text="Boards" href="#" />
      <RouteLink class="px-8" text="Settings" href="#" />
      <RouteLink class="px-8" text="Help" href="#" />
    </div>
    <RouteLink class="mt-1 text-tertiary" text="Sign Out" href="#" />
  </nav>
</template>

<script>
import RouteLink from '@/components/ui/atoms/RouteLink'
import SectionImage from '@/components/ui/atoms/SectionImage'

export default {
  name: 'account-header',
  components: {
    RouteLink,
    SectionImage,
  },
}
</script>
