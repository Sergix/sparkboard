<template>
  <section
    @click="$emit('click')"
    class="flex flex-col border border-black rounded-section"
  >
    <h4 class="p-4">{{ board.title }}</h4>
    <div class="flex flex-1 flex-row p-4">
      <div class="flex w-1/2 flex-col flex-0">
        <p class="flex-1 mr-4 break-words">
          {{ desc }}
        </p>
        <p class="flex-0">{{ cardCount }} cards</p>
      </div>
      <img class="flex-1 w-1/2" :src="board.coverImg" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'board-card',
  props: {
    boardTitle: String,
  },
  components: {},
  computed: {
    board() {
      return this.$store.getters.getBoardByTitle(this.boardTitle)
    },
    cardCount() {
      return this.board.cards.length
    },
    desc() {
      return this.board.desc.length > 50
        ? this.board.desc.substr(0, 47).concat('...')
        : this.board.desc
    },
  },
}
</script>
