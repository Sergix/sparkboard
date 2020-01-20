<template>
  <div class="landing flex flex-col max-w-3/4 mr-auto ml-auto">
    <header class="flex flex-row justify-center items-center p-4 w-full">
      <figure class="logo flex-1"><h1>Sparkboard</h1></figure>
      <Button
        class="self-end border-black border"
        type="action"
        label="Create your board"
      />
    </header>
    <div class="hero content-section flex-row">
      <div class="w-1/2">
        <h1 class="text-hero leading-none font-bold">
          Never again lose a spark of inspiration.
        </h1>
        <figure></figure>
        <p class="text-2xl leading-relaxed mt-12">
          Sparkboard is a place to store your ideas when they come to you,
          whether by a simple thought in your head or coming across an
          expressive work of art.
        </p>
      </div>
      <figure class="hero-image w-1/3 flex flex-1 justify-center items-center">
        <SectionImage
          class="w-1/2"
          alt="Sparkboard"
          src="prototype-black.png"
        />
      </figure>
    </div>
    <div class="content-section flex-col">
      <h2>Remember ideas</h2>
      <div class="landing-cards w-full flex flex-row">
        <Card
          class="w-1/3"
          title="Card1"
          desc="This card is pretty cool"
          img="card1.jpg"
        />
        <Card
          class="w-1/3"
          title="Card2"
          desc="Card description 2"
          img="card2.jpg"
        />
        <Card
          class="w-1/3"
          title="Card3"
          desc="Card description 3"
          img="card3.jpg"
        />
      </div>
    </div>
    <div class="content-section flex-col">
      <h2>Place them on a centralized board</h2>
      <figure
        class="bg-secondary text-white rounded-section pb-12 flex flex-row"
      >
        <div class="mt-8 ml-8 w-1/4 p-4">
          <h3 class="font-bold">Company branding</h3>
          <figcaption>
            Maybe improve the main page with a little something new. Make sure
            to eventually share with management to get their thoughts.
          </figcaption>
        </div>
        <div class="flex flex-grow justify-center items-center">
          <SectionImage
            class="w-1/3 p-8"
            alt="Example boards"
            src="undraw_content_structure.svg"
          />
        </div>
      </figure>
    </div>
    <div class="content-section flex-col">
      <h2>Keep multiple boards</h2>
      <img src="@/assets/img/multiple-boards.svg" />
    </div>
    <div class="content-section flex-col">
      <h2>Made for humans</h2>
      <section class="flex flex-row justify-center items-center">
        <SectionImage
          class="w-1/2 max-w-1/4"
          src="portrait2.png"
          alt="Testimonial image"
        />
        <div class="max-w-1/2 ml-20 mr-20">
          <h3 class="font-serif font-semibold mb-4">
            I can't imagine not having it.
          </h3>
          <p class="text-lg mb-8">
            It's become an essential for my daily work and home routine. Living
            in the city, I come across a lot of neat designs that without a way
            to keep track I would quickly forget. But with Sparkboard, I have an
            easy way to remember every new piece of inspiration that I come
            across throughout my day.
          </p>
          <span class="font-serif float-right">Real Persson</span>
        </div>
      </section>
      <section class="flex flex-row justify-center items-center">
        <div class="max-w-1/2 ml-20 mr-20">
          <h3 class="font-serif font-semibold mb-4">
            Essential to my workflow as a designer.
          </h3>
          <p class="text-lg mb-8">
            It's become an essential for my daily work and home routine. Living
            in the city, I come across a lot of neat designs that without a way
            to keep track I would quickly forget. But with Sparkboard, I have an
            easy way to remember every new piece of inspiration that I come
            across throughout my day.
          </p>
          <span class="font-serif float-right">Real Persson</span>
        </div>
        <SectionImage
          class="w-1/2 max-w-1/4"
          src="portrait1.png"
          alt="Testimonial image"
        />
      </section>
    </div>
    <div class="flex-col max-w-3/4 ml-auto mr-auto mt-24">
      <h1 class="text-center text-6xl leading-tight">
        So what are you waiting for? Never lose a great idea again.
      </h1>
      <Button
        class="text-4xl border-neutral border rounded-full flex ml-auto mr-auto mt-8"
        label="Create your board"
        type="action"
      />
    </div>
    <PageFooter />
  </div>
</template>

<script>
import Button from '@/components/ui/atoms/Button'
import Card from '@/components/ui/molecules/Card'
import SectionImage from '@/components/ui/atoms/SectionImage'
import PageFooter from '@/components/ui/molecules/PageFooter'

export default {
  name: 'landing',
  components: {
    Button,
    Card,
    SectionImage,
    PageFooter,
  },
}
</script>

<style lang="sass" scoped>
.content-section
  @apply flex
  @apply w-full
  @apply mt-24

  h2
    @apply text-center
    @apply mb-12
</style>
