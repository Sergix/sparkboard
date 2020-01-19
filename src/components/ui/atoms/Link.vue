<template>
  <a class="text-black font-semibold" :href="href">{{ text }}</a>
</template>

<script>
const isLink = link =>
  // eslint-disable-next-line no-useless-escape
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
    link
  )

export default {
  name: 'link',
  props: {
    href: {
      validation: value => isLink(value),
    },
    text: String,
  },
}
</script>
