<template>
  <footer
    class="bg-black py-16 px-32 text-white flex flex-row justify-center items-center mt-12"
  >
    <SectionImage
      class="p-8 mr-16"
      src="logo-with-text.svg"
      alt="Sparkboard by Sergix"
    />
    <div class="flex-grow flex flex-row">
      <section class="flex-grow">
        <h4><RouteLink href="#" text="Company" /></h4>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Copyright</li>
          <li>Trademark</li>
        </ul>
      </section>
      <section class="flex-grow">
        <h4><RouteLink href="#" text="Help" /></h4>
        <ul>
          <li>Support</li>
          <li>FAQs</li>
          <li>Sitemap</li>
        </ul>
      </section>
      <section class="flex-grow">
        <h4><RouteLink href="#" text="News" /></h4>
        <ul>
          <li>Blog</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Trademark</li>
        </ul>
      </section>
      <section class="flex-grow">
        <h4><RouteLink href="#" text="Developers" /></h4>
        <ul>
          <li>GitHub</li>
          <li>Hashnode</li>
          <li>Stackshare</li>
          <li>Dev.to</li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import RouteLink from '@/components/ui/atoms/RouteLink'
import SectionImage from '@/components/ui/atoms/SectionImage'

export default {
  name: 'page-footer',
  components: {
    RouteLink,
    SectionImage,
  },
}
</script>

<style lang="sass" scoped>
footer *
  @apply text-white
</style>
