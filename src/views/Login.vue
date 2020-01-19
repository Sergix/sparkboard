<template>
  <div class="login flex max-w-4xl ml-auto mr-auto">
    <div class="vue-logo w-1/2">
      <img src="@/assets/logo.png" alt="Vue logo" />
    </div>
    <div class="login-form w-1/2">
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
  name: 'landing',
  components: {
    InputField,
    CheckboxField,
    Form,
    Button,
  },
}
</script>
