import { Machine } from 'xstate'

const accountConfirmMachine = Machine({
  id: 'confirm',
  initial: 'pending',
  states: {
    pending: {
      on: {
        CONFIRM: 'confirmed',
        REJECT: 'rejected',
      },
    },
    confirmed: {
      type: 'final',
    },
    rejected: {
      type: 'final',
    },
  },
})

export default accountConfirmMachine
