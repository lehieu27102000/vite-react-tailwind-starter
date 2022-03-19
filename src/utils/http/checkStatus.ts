import type { ErrorMessageMode } from '/#/axios'
export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message'
): void {
  let errMessage = ''
  switch (status) {
    case 400:
      errMessage = `${msg}`
      break
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      console.log('123')
      break
    case 403:
      break
    case 404:
      break
    case 405:
      break
    case 408:
      break
    case 500:
      break
    case 501:
      break
    case 502:
      break
    case 503:
      break
    case 504:
      break
    case 505:
      break
    default:
  }
}
