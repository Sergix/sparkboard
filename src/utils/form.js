const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const FORM_ERROR = {
  email: 'Email address invalid.',
  password_length: 'Password must be longer than six characters.',
  password_equality: 'Passwords do not match.',
  privacy: 'Please accept the Privacy Policy.',
}

function validateEmail(email) {
  return email && EMAIL_REGEX.test(email.toLowerCase())
}
function validatePasswordLength(password) {
  return password.length > 6
}
function validatePasswordEquality(password, confirmedPassword) {
  return password === confirmedPassword
}
function validatePrivacy(privacy) {
  return privacy
}

export {
  EMAIL_REGEX,
  FORM_ERROR,
  validateEmail,
  validatePasswordLength,
  validatePasswordEquality,
  validatePrivacy,
}
