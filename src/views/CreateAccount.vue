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
        {{ formError }}
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
import * as FormUtils from '@/utils/form'
import { mapState } from 'vuex'

export default {
  name: 'create-account',
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
      formError: '',
    }
  },
  computed: mapState({
    authError: state => state.account.authError,
    authErrorMessage: state => state.account.authErrorMessage,
  }),
  methods: {
    //
    // TODO
    // move form error to a prop in the Form component
    //
    setFormError(text) {
      this.formError = text
    },
    verifyFields() {
      //
      // TODO
      // refactor this somehow; maybe move the setters to the validators?
      // or move all these to set() functions in computed fields
      //
      if (!FormUtils.validateEmail(this.email)) {
        this.setFormError(FormUtils.FORM_ERROR.email)
        return
      }
      if (!FormUtils.validatePasswordLength(this.password)) {
        this.setFormError(FormUtils.FORM_ERROR.password_length)
        return
      }
      if (
        !FormUtils.validatePasswordEquality(
          this.password,
          this.confirmedPassword,
        )
      ) {
        this.setFormError(FormUtils.FORM_ERROR.password_equality)
        return
      }
      if (!FormUtils.validatePrivacy(this.privacy)) {
        this.setFormError(FormUtils.FORM_ERROR.privacy)
        return
      }
      this.setFormError('')
    },
    createAccount() {
      this.verifyFields()
      this.$store.dispatch('account/create', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
