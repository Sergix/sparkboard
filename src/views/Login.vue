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
        <InputField class="mb-6" label="Email" placeholder="email" />
        <InputField
          class="mb-6"
          label="Password"
          placeholder="password"
          type="password"
        />
        <InputField
          class="mb-6"
          label="Confirm password"
          placeholder="password"
          type="password"
        />
        <CheckboxField
          class="justify-center mr-2"
          name="privacy-confirm"
          label="I have read and accept the privacy policy."
        />
      </Form>
      <FormButton
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
import Form from '@/components/ui/organisms/Form'

export default {
  name: 'login',
  components: {
    InputField,
    CheckboxField,
    Form,
    FormButton,
    SectionImage,
  },
}
</script>

<style lang="scss"></style>
