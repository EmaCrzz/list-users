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
  const errorUsername = validateUsername(dataInput.username)
  const errorPassword = validatePassword(dataInput.password)
  const errorPassword2 = validateSamePasswords(dataInput.password, dataInput.password2)
  const errorEmail = validateEmail(dataInput.email)
}
