<template>
  <div class="flex flex-row">
    <div class="text-center w-full" v-show="!confirmed && !rejected">
      <h3>Confirming account...</h3>
    </div>
    <div
      class="w-full flex flex-row justify-center align-middle"
      v-show="confirmed"
    >
      <section class="w-1/2 text-right mr-16 flex flex-col justify-center">
        <h1>Your account is confirmed!</h1>
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
    <div v-show="rejected" class="w-full text-center">
      <h3>Account confirmation failed.</h3>
      <p class="text-neutral">{{ message }}</p>
      <section class="mt-16">
        <h4>Please retype your email to send a new confirmation email.</h4>
        <div class="mt-4">
          <TextInput
            class="border border-neutral rounded-input p-2 mr-4"
            name="email"
            placeholder="email"
            type="email"
            v-model="email"
          />
          <FormButton type="submit" label="confirm" @click="resendEmail" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SectionImage from '@/components/ui/atoms/SectionImage'
import { stitchApp } from '@/stitch/app'
import { UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk'
import TextInput from '@/components/ui/atoms/TextInput'
import FormButton from '@/components/ui/atoms/FormButton'
import { FORM_ERROR, validateEmail } from '@/utils/form'

export default {
  name: 'account-confirmed',
  components: {
    SectionImage,
    TextInput,
    FormButton,
  },
  data() {
    return {
      //
      // TODO
      // refactor this to use a more state-machine like approach
      //
      confirmed: false,
      rejected: false,

      message: '',
      emailPassClient: stitchApp.auth.getProviderClient(
        UserPasswordAuthProviderClient.factory,
      ),
      email: '',
    }
  },
  methods: {
    resendEmail() {
      if (validateEmail(this.email)) {
        this.rejected = false
        this.emailPassClient.resendConfirmationEmail(this.email)
        this.$router.push('login')
      } else {
        this.message = FORM_ERROR.email
      }
    },
  },
  created() {
    // if either of the confirmation params are not present, go back to the landing page
    if (!this.$route.query.token || !this.$route.query.tokenId) {
      this.$router.push('/')
    }
    this.emailPassClient
      .confirmUser(this.$route.query.token, this.$route.query.tokenId)
      .then(() => (this.confirmed = true))
      .catch(err => {
        this.rejected = true
        this.message = err
      })
  },
}
</script>
