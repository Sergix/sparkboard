<template>
  <div class="dashboard flex flex-col mx-16">
    <div class="flex flex-1 flex-row">
      <div class="w-1/2 text-center m-auto">
        <h1 class="text-hero font-semibold leading-none">
          Welcome back!
        </h1>
      </div>

      <div class="w-1/2 flex-1 my-auto">
        <h2 class="font-medium text-center mb-4">Boards</h2>
        <div class="mx-auto flex flex-wrap justify-center">
          <DashboardCard
            class="m-2 w-2/5 cursor-pointer"
            v-for="board in boards"
            :key="board.title"
            :board="board"
            @click.native="openBoard(board.title)"
          />
          <div class="flex flex-col w-2/5 m-2 justify-center items-center">
            <IconButton icon="plus-circle" name="Create new board" />
            <h4 class="text-center">Create new board</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCard from '@/components/ui/molecules/DashboardCard'
import IconButton from '@/components/ui/molecules/IconButton'
import { getUserBoards } from '@/stitch/db'
import { mapState } from 'vuex'

export default {
  name: 'dashboard',
  components: {
    DashboardCard,
    IconButton,
  },
  computed: {
    ...mapState({
      boards: state => state.boards.boards,
    }),
  },
  methods: {
    openBoard(title) {
      this.$store.dispatch('boards/loadBoard', title)
      this.$router.push('board')
    },
  },
  mounted() {
    const boards = getUserBoards()
    this.$store.commit('boards/set', boards)
  },
}
</script>

<style lang="sass" scoped>
.dashboard
  height: 85vh
</style>
