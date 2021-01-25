import { validateUsername, validatePassword, validateSamePasswords, validateEmail } from 'utilities/validationsInputs'

export const checkExist = ({ username }) => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const isExist = users.find(user => user.username === username)
  return isExist || false
}

export const register = instanceNewUser => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  users.push(instanceNewUser)
  JSON.stringify(localStorage.setItem('users', JSON.stringify(users)))
}

export const validate = (dataInput) => {
  const username = validateUsername(dataInput.username)
  const password = validatePassword(dataInput.password)
  const password2 = validateSamePasswords(dataInput.password, dataInput.password2)
  const email = validateEmail(dataInput.email)

  if (!username.error && !password.error && !password2.error && !email.error) {
    return { errors: { username, password, password2, email }, ifError: false }
  } else {
    return { errors: { username, password, password2, email }, ifError: true }
  }
}
