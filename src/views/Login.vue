<template>
  <div class="login flex items-center justify-center max-w-4xl ml-auto mr-auto">
    <figure class="vue-logo flex items-center justify-center flex-col w-1/2">
      <img src="@/assets/img/logo.png" alt="Vue logo" />
    </figure>
    <div
      class="login-form flex-1 flex flex-col justify-center items-center w-1/2"
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
      <Button label="Submit" class="flex mr-auto ml-auto mt-4" />
    </div>
  </div>
</template>

<script>
import InputField from '@/components/ui/molecules/InputField'
import CheckboxField from '@/components/ui/molecules/CheckboxField'
import Form from '@/components/ui/organisms/Form'
import Button from '@/components/ui/atoms/Button'

export default {
  name: 'login',
  components: {
    InputField,
    CheckboxField,
    Form,
    Button,
  },
}
</script>

<style lang="scss"></style>
