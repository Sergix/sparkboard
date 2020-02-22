<template>
  <div class="flex flex-col h-full overflow-hidden">
    <!-- board title -->
    <div
      class="flex flex-row flex-0 py-4 pl-8 border-b border-t border-r-0 border-l-0 border-neutral z-10 bg-white"
    >
      <div class="inline-flex" v-show="!isEditingTitle">
        <h4 class="mr-4">{{ boardTitle }}</h4>
        <IconButton
          icon="edit"
          name="Edit board title"
          v-on:clicked="beginEditBoardTitle"
        />
      </div>
      <div
        class="inline-flex"
        v-show="isEditingTitle"
        v-on:keypress.enter="finishEditBoardTitle"
      >
        <VariableTextInput
          class="border-none mr-1 text-xl font-medium"
          v-model="boardTitle"
          v-focus="isEditingTitle"
        />
        <IconButton
          icon="check"
          name="Save board title"
          v-on:clicked="finishEditBoardTitle"
        />
      </div>
    </div>

    <!-- Sidebar -->
    <div class="flex flex-row flex-1">
      <div class="flex-0 w-1/6 border-r border-neutral p-4 z-10 bg-white">
        <h4 class="mb-2 ml-1">Cards</h4>
        <draggable class="list-none" v-model="cardList">
          <li
            v-for="card in cards"
            :key="card.id"
            class="border border-neutral rounded-button flex mb-2 p-2"
          >
            <span class="flex-1">{{ card.title }}</span>
            <IconButton
              class="mr-2"
              icon="edit"
              name="Edit Card"
              v-on:clicked="openCardEdit(card.id)"
            />
            <IconButton
              icon="x-circle"
              name="Delete Card"
              v-on:clicked="deleteCard(card.id)"
            />
          </li>
        </draggable>

        <uploadcare
          class="flex"
          :publicKey="$store.state.uploadcare"
          @success="onUploadSuccess"
          @error="onUploadError"
        >
          <IconButton class="mx-auto" icon="plus-circle" name="Add Card" />
        </uploadcare>
      </div>

      <!-- Card space -->
      <div class="flex-1 relative z-0" ref="cardspace">
        <vue-draggable-resizable
          v-for="card in cards.slice().reverse()"
          :key="card.id"
          classNameHandle="card-handle"
          :resizable="true"
          :lock-aspect-ratio="true"
          :parent="true"
          :minWidth="200"
          :w="card.size"
          :x="card.position.x"
          :y="card.position.y"
          :handles="['tl']"
          @dragstop="moveCard(...arguments, card.id)"
          @resizestop="onCardResize(arguments[2], card.id)"
        >
          <Card :title="card.title" :desc="card.desc" :img="card.img" />
        </vue-draggable-resizable>
      </div>
    </div>
  </div>
</template>

<script>
import VariableTextInput from '@/components/ui/molecules/VariableTextInput'
import IconButton from '@/components/ui/molecules/IconButton'
import Card from '@/components/ui/molecules/Card'
import CardEdit from '@/components/ui/organisms/CardEdit'

import board from '@/store/modules/board'
import { mapState } from 'vuex'

import { captureException } from '@sentry/browser'
import VueDraggableResizable from 'vue-draggable-resizable'
import draggable from 'vuedraggable'
import Uploadcare from 'uploadcare-vue'

export default {
  name: 'board',
  components: {
    IconButton,
    Card,
    VariableTextInput,
    VueDraggableResizable,
    draggable,
    Uploadcare,
  },
  data() {
    return {
      isEditingTitle: false,
    }
  },
  beforeRouteEnter(to, from, next) {
    // make sure we've already loaded a board first
    if (board.state.title === String) next('/dashboard')
    else next()
  },
  computed: {
    ...mapState({
      cards: state => state.board.cards,
      title: state => state.board.title,
    }),
    boardTitle: {
      get() {
        return this.title
      },
      set(value) {
        this.$store.dispatch('board/editTitle', value)
      },
    },
    cardList: {
      get() {
        return this.cards
      },
      set(value) {
        this.$store.dispatch('board/setCards', value)
      },
    },
  },
  methods: {
    onUploadSuccess(event) {
      this.$store.dispatch('board/addCard', {
        id: event.uuid,
        title: 'New Card',
        desc: 'Description',
        img: event.cdnUrl,
      })
    },
    onUploadError(event) {
      if (event) captureException(event)
    },
    openCardEdit(id) {
      this.$modal.show(CardEdit, { id }, { height: 'auto' })
    },
    deleteCard(id) {
      this.$store.dispatch('board/removeCard', id)
    },
    moveCard(left, top, id) {
      this.$store.dispatch('board/editCard', {
        id,
        position: { x: left, y: top },
      })
    },
    // TODO
    // convert title editing to state machine?
    beginEditBoardTitle() {
      this.isEditingTitle = true
    },
    finishEditBoardTitle() {
      // don't let title be empty
      if (!this.boardTitle) this.boardTitle = 'Board'
      this.isEditingTitle = false
    },
    onCardResize(size, id) {
      this.$store.dispatch('board/editCard', {
        id,
        size,
      })
    },
  },
}
</script>

<style lang="sass">
.card-handle
  @apply absolute
  @apply w-2
  @apply h-2
  @apply border-b
  @apply border-r
  @apply border-neutral
  @apply border-dashed
  top: -10px
  left: -10px
</style>
