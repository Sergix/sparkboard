<template>
  <div class="flex flex-col h-screen">
    <AccountHeader class="bg-white z-10" />

    <div
      class="board-title flex flex-row flex-0 py-4 border-b border-t border-r-0 border-l-0 border-neutral z-10 bg-white"
    >
      <h4 class="ml-8 mr-4">{{ boardTitle }}</h4>
      <IconButton icon="edit" name="Edit Name" />
    </div>

    <!-- Sidebar -->
    <div class="flex flex-row flex-1">
      <div
        class="card-list flex-0 w-1/6 border-r border-neutral p-4 z-10 bg-white"
      >
        <h4 class="mb-2 ml-1">Cards</h4>
        <draggable class="list-none" v-model="cardList" handle=".handle">
          <li
            v-for="card in cards"
            :key="card.id"
            class="border border-neutral rounded-button flex mb-2 p-2"
          >
            <span class="flex-1">{{ card.title }}</span>
            <IconButton class="handle mr-2" icon="move" name="Handle" />
            <IconButton
              class="mr-2"
              icon="edit"
              name="Edit Card"
              v-on:clicked="openCardEdit(card)"
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
          :publicKey="apiKey"
          @success="onSuccess"
          @error="onError"
        >
          <IconButton class="mx-auto" icon="plus-circle" name="Add Card" />
        </uploadcare>
      </div>

      <!-- Card space -->
      <div class="board-space flex-1 w-full h-full z-0">
        <vue-draggable-resizable
          v-for="card in cards.slice().reverse()"
          :key="card.id"
          :resizable="false"
          :w="450"
        >
          <Card :title="card.title" :desc="card.desc" :img="card.img" />
        </vue-draggable-resizable>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/ui/molecules/IconButton'
import AccountHeader from '@/components/ui/molecules/AccountHeader'
import Card from '@/components/ui/molecules/Card'
import CardEdit from '@/components/ui/organisms/CardEdit'

import { mapState } from 'vuex'

import { captureException } from '@sentry/browser'
import VueDraggableResizable from 'vue-draggable-resizable'
import draggable from 'vuedraggable'
import Uploadcare from 'uploadcare-vue'

export default {
  name: 'board',
  components: {
    IconButton,
    AccountHeader,
    Card,
    VueDraggableResizable,
    draggable,
    Uploadcare,
  },
  data() {
    return {
      apiKey: process.env.UPLOADCARE,
    }
  },
  computed: {
    ...mapState({
      cards: state => state.board.cards,
      boardTitle: state => state.board.title,
    }),
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
    onSuccess(event) {
      this.$store.dispatch('board/addCard', {
        id: event.uuid,
        title: 'card',
        desc: 'desc',
        img: event.cdnUrl,
      })
    },
    onError(event) {
      captureException(event)
    },
    openCardEdit(card) {
      this.$modal.show(CardEdit, { card }, { height: 'auto' })
    },
    deleteCard(id) {
      this.$store.dispatch('board/removeCard', id)
    },
  },
}
</script>
