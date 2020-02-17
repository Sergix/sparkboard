<template>
  <div class="flex flex-row">
    <section class="w-1/2 flex justify-end">
      <SectionImage
        class="w-1/2"
        src="illustrations/content-structure.svg"
        alt="Sparkboard"
      />
    </section>
    <section
      class="w-1/2 text-left ml-16 flex flex-col justify-center align-middle"
    >
      <h1>Confirm your account</h1>
      <p>
        Please check your email for a confirmation link.
        <span class="text-neutral text-sm">
          Check your spam folder just in case!
        </span>
      </p>
    </section>
  </div>
</template>

<script>
import SectionImage from '@/components/ui/atoms/SectionImage'
export default {
  name: 'confirm-account',
  components: {
    SectionImage,
  },
}
</script>
