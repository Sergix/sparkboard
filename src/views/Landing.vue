<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button color="#00473e" label="Submit" />
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/ui/atoms/Button'

export default {
  name: 'landing',
  components: {
    Button,
  },
}
</script>

<style lang="sass" scoped></style>
