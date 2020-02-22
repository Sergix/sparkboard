<template>
  <div class="flex flex-row">
    <div v-show="state.matches('pending')" class="text-center w-full">
      <h3 class="text-state-pending">Confirming account...</h3>
    </div>

    <div
      v-show="state.matches('confirmed')"
      class="w-full flex flex-row justify-center align-middle"
    >
      <section class="w-1/2 text-right mr-16 flex flex-col justify-center">
        <h1 class="text-state-ok">Your account is confirmed!</h1>
        <p>
          Click
          <router-link to="dashboard" class="text-blue-700">here</router-link>
          to go to your dashboard.
        </p>
      </section>
      <section class="w-1/2">
        <SectionImage
          class="w-1/2"
          src="illustrations/content-structure.svg"
          alt="Sparkboard"
        />
      </section>
    </div>

    <div v-show="state.matches('rejected')" class="w-full text-center">
      <h3 class="text-state-error">Account confirmation failed.</h3>
      <p class="text-neutral">{{ errorMessage }}</p>
      <section class="mt-16">
        <h4>Please retype your email to send a new confirmation email.</h4>
        <div class="mt-4">
          <TextInput
            class="border border-neutral rounded-input py-2 px-3 mr-4"
            name="email"
            placeholder="email"
            type="text"
            v-model="email"
          />
          <FormButton type="submit" label="Confirm" @click="resendEmail" />
          <h5 class="text-state-error mt-2">{{ formErrorMessage }}</h5>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { stitchApp } from '@/stitch/app'
import { UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk'
import SectionImage from '@/components/ui/atoms/SectionImage'
import TextInput from '@/components/ui/atoms/TextInput'
import FormButton from '@/components/ui/atoms/FormButton'
import FormUtils from '@/components/mixins/form'

import { interpret } from 'xstate'
import accountConfirmMachine from '@/machines/accountConfirm'

export default {
  name: 'account-confirmed',
  mixins: [FormUtils],
  components: {
    SectionImage,
    TextInput,
    FormButton,
  },
  data() {
    return {
      state: accountConfirmMachine.initialState,
      confirmService: interpret(accountConfirmMachine),

      email: '',
      emailPassClient: null,

      errorMessage: '',
    }
  },
  methods: {
    resendEmail() {
      if (this.validateEmail(this.email)) {
        this.emailPassClient.resendConfirmationEmail(this.email)
        this.$router.push('login')
      }
    },
  },
  created() {
    this.emailPassClient = stitchApp.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory,
    )

    // initialize state machine transitions
    this.confirmService
      .onTransition(state => {
        this.state = state
      })
      .start()

    // if either of the confirmation params are not present, go back to the landing page
    if (!this.$route.query.token || !this.$route.query.tokenId) {
      this.$router.push('/')
    }
    this.emailPassClient
      .confirmUser(this.$route.query.token, this.$route.query.tokenId)
      .then(() => this.confirmService.send('CONFIRM'))
      .catch(err => {
        this.confirmService.send('REJECT')
        this.errorMessage = err
      })
  },
}
</script>
