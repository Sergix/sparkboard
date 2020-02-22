<template>
  <div
    class="login flex items-center justify-center max-w-6xl ml-auto mr-auto flex-grow"
  >
    <figure class="vue-logo flex items-center justify-center flex-col w-1/2">
      <SectionImage src="illustrations/sign-in.svg" alt="Sign In" />
    </figure>
    <div
      class="login-form flex-1 flex flex-col justify-center items-center w-1/2 mb-12"
    >
      <Form title="Create your account">
        <span class="text-neutral">
          Already have an account?
          <router-link to="login" class="text-blue-700">Login.</router-link>
        </span>
        <InputField
          @input="verifyFields"
          v-model="email"
          class="my-6"
          label="Email"
          placeholder="email"
        />
        <InputField
          @input="verifyFields"
          v-model="password"
          class="mb-6"
          label="Password"
          placeholder="password"
          type="password"
        />
        <InputField
          @input="verifyFields"
          v-model="confirmedPassword"
          class="mb-6"
          label="Confirm password"
          placeholder="password"
          type="password"
        />
        <CheckboxField
          @input="verifyFields"
          v-model="privacy"
          class="justify-center mr-2"
          name="privacy-confirm"
          label="I have read and accept the privacy policy."
        />
      </Form>
      <span v-show="formError" class="text-secondary-darker">
        {{ formErrorMessage }}
      </span>
      <span v-show="authError" class="text-secondary-darker">
        {{ authErrorMessage }}
      </span>
      <FormButton
        @click="createAccount"
        type="submit"
        label="Submit"
        class="flex mr-auto ml-auto mt-4"
      />
    </div>
  </div>
</template>

<script>
import FormButton from '@/components/ui/atoms/FormButton'
import SectionImage from '@/components/ui/atoms/SectionImage'
import InputField from '@/components/ui/molecules/InputField'
import CheckboxField from '@/components/ui/molecules/CheckboxField'
import Form from '@/components/ui/atoms/Form'
import FormUtils from '@/components/mixins/form'
import { mapState } from 'vuex'
import { create } from '@/stitch/account'

export default {
  name: 'create-account',
  mixins: [FormUtils],
  components: {
    InputField,
    CheckboxField,
    Form,
    FormButton,
    SectionImage,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmedPassword: '',
      privacy: false,
    }
  },
  computed: mapState({
    authError: state => state.account.authError,
    authErrorMessage: state => state.account.authErrorMessage,
  }),
  methods: {
    verifyFields() {
      if (!this.validateEmail(this.email)) return false
      if (!this.validatePasswordLength(this.password)) return false
      if (!this.validatePasswordEquality(this.password, this.confirmedPassword))
        return false
      if (!this.validatePrivacy(this.privacy)) return false
      return true
    },
    createAccount() {
      if (this.verifyFields()) create(this.email, this.password)
    },
  },
}
</script>
