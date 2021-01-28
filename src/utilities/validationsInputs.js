import { checkExist } from 'utilities/users'

export const validateUsername = (username) => {
  let error = false
  let msg = ''
  if (checkExist({ username })) {
    error = true
    msg = 'Nombre de usuario existente'
  }

  if (username.length < 6) {
    error = true
    msg = 'El usuario debe contener al menos 6 caracteres'
  }

  return { error, msg }
}

export const validatePassword = (password) => {
  if (password.length < 8) return { error: true, msg: 'La contraseña debe contener al menos 8 caracteres' }

  return { error: false, msg: '' }
}

export const validateSamePasswords = (password, password2) => {
  if (password !== password2) return { error: true, msg: 'La contraseña no coincíden' }

  return { error: false, msg: '' }
}

export const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (emailRegex.test(email)) return { error: false, msg: '' }
  else return { error: true, msg: 'Formato de email incorrecto' }
}
