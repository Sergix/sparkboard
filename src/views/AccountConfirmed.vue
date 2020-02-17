<template>
  <div class="flex flex-row">
    <section
      class="w-1/2 text-right mr-16 flex flex-col justify-center align-middle"
    >
      <h1>Your account is confirmed!</h1>
      <p>
        Click
        <router-link to="dashboard" class="text-blue-700">here</router-link> to
        go to your dashboard.
      </p>
    </section>
    <section class="w-1/2">
      <SectionImage
        class="w-1/2"
        src="illustrations/content-structure.svg"
        alt="Sparkboard"
      />
    </section>
  </div>
</template>

<script>
import SectionImage from '@/components/ui/atoms/SectionImage'
export default {
  name: 'account-confirmed',
  components: {
    SectionImage,
  },
}
</script>
