import { Message } from '@lui/lui'

export const showErrorMessage = (exception,
  defaultMessage,
  errorCode,
  errorMessage) => {
  if (exception !== null && exception.code !== null && exception.message !== null) {
    const message = errorCode + exception.code + errorMessage + exception.message
    Message({
      message,
      type: 'error',
      showClose: true,
      duration: 4000
    })
  } else {
    if (defaultMessage === '') return
    Message({
      message: defaultMessage,
      type: 'error',
      showClose: true,
      duration: 4000
    })
  }
}
export const showInfoMsg = (message) => {
  Message({ message, type: 'info', showClose: true })
}
export const showSuccessMsg = (message) => {
  Message({ message, type: 'success', showClose: true })
}
export const showWarningMsg = (message) => {
  Message({ message, type: 'warning', showClose: true })
}
export const showErrorMsg = (message) => {
  Message({ message, type: 'error', showClose: true })
}
