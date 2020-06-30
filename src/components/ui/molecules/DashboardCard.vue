<template>
  <section class="flex flex-col border border-black rounded-section">
    <div class="flex flex-row">
      <h4 class="p-4 flex-grow">{{ board.title }}</h4>
      <IconButton
        @click.native.stop="editBoard"
        class="mr-4 z-10"
        icon="edit"
        name="Edit board"
      />
    </div>
    <div class="flex flex-1 flex-row p-4">
      <div class="flex w-1/2 flex-col flex-0">
        <p class="flex-1 mr-4 break-words">
          {{ desc }}
        </p>
        <p class="flex-0">{{ cardCount }} cards</p>
      </div>
      <img class="flex-1 w-1/2 rounded-section" :src="board.img" />
    </div>
  </section>
</template>

<script>
import IconButton from '@/components/ui/molecules/IconButton'
import BoardEdit from '@/components/ui/organisms/BoardEdit'

import { minimizeText } from '@/util'

export default {
  name: 'board-card',
  props: {
    board: {
      type: Object,
      required: true,
    },
  },
  components: { IconButton },
  computed: {
    cardCount() {
      return this.board.cards.length
    },
    desc() {
      return minimizeText(this.board.desc, 50)
    },
  },
  methods: {
    editBoard() {
      this.$modal.show(BoardEdit, { board: this.board }, { height: 'auto' })
    },
  },
}
</script>
