<template>
  <div
    class="flex items-center justify-center max-w-6xl ml-auto mr-auto flex-grow"
  >
    <figure class="flex items-center justify-center flex-col w-1/2">
      <SectionImage src="illustrations/sign-in.svg" alt="Sign In" />
    </figure>
    <div class="flex-1 flex flex-col justify-center items-center w-1/2 mb-12">
      <Form title="Login" class="w-3/4">
        <span class="text-neutral">
          Don't have an account?
          <router-link to="new" class="text-blue-700">
            Create one.
          </router-link>
        </span>
        <InputField
          v-model="email"
          class="my-6"
          label="Email"
          placeholder="email"
        />
        <InputField
          v-model="password"
          label="Password"
          placeholder="password"
          type="password"
        />
      </Form>
      <span v-show="authError" class="text-secondary-darker">
        Invalid email or password.
      </span>
      <FormButton
        type="submit"
        label="Login"
        class="flex mr-auto ml-auto mt-4"
        @click="login"
      />
    </div>
  </div>
</template>

<script>
import FormButton from '@/components/ui/atoms/FormButton'
import SectionImage from '@/components/ui/atoms/SectionImage'
import InputField from '@/components/ui/molecules/InputField'
import Form from '@/components/ui/atoms/Form'
import { mapState } from 'vuex'

export default {
  name: 'login',
  components: {
    InputField,
    Form,
    FormButton,
    SectionImage,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: mapState({
    authError: state => state.account.authError,
  }),
  methods: {
    login() {
      this.$store.dispatch('account/login', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
