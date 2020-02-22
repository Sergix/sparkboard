const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  data() {
    return {
      formErrorMessage: '',
      formError: {
        email: 'Email address invalid.',
        password_length: 'Password must be longer than six characters.',
        password_equality: 'Passwords do not match.',
        privacy: 'Please accept the Privacy Policy.',
      },
    }
  },
  methods: {
    setError(message) {
      this.formErrorMessage = message
      return false
    },
    validateEmail(email) {
      return email && EMAIL_REGEX.test(email.toLowerCase())
        ? true
        : this.setError(this.formError.email)
    },
    validatePasswordLength(password) {
      return password.length > 6
        ? true
        : this.setError(this.formError.password_length)
    },
    validatePasswordEquality(password, confirmedPassword) {
      return password === confirmedPassword
        ? true
        : this.setError(this.formError.password_equality)
    },
    validatePrivacy(privacy) {
      return privacy ? true : this.setError(this.formError.privacy)
    },
  },
}
