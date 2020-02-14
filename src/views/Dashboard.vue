<template>
  <div class="dashboard flex flex-col mx-16">
    <div class="flex flex-1 flex-row">
      <div class="w-1/2 text-center m-auto">
        <h1 class="text-hero font-semibold leading-none">
          Hello, Peyton!
        </h1>
      </div>

      <div class="w-1/2 flex-1 my-auto">
        <h2 class="font-medium text-center mb-4">Boards</h2>
        <div class="mx-auto flex flex-wrap justify-center">
          <DashboardCard
            class="m-2 w-2/5"
            v-for="board in boards"
            :key="board.id"
            :boardId="board.id"
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
import { mapState } from 'vuex'

export default {
  name: 'dashboard',
  components: {
    DashboardCard,
    IconButton,
  },
  computed: {
    ...mapState({
      firstName: state => state.account.firstName,
      boards: state => state.boards,
    }),
  },
}
</script>

<style lang="sass" scoped>
.dashboard
  height: 85vh
</style>
