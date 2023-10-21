const domScreen = document.querySelector("[data-component='screen']")

const renderScreen = ({ heading, body, options, error }) => {
  if (heading != undefined) {
    const domHeading = document.createElement('h1')
    domHeading.innerText = heading
    domHeading.classList = 'heading'

    domScreen.appendChild(domHeading)
  }
  if (body != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerText = body
    domHeading.classList = 'body'

    domScreen.appendChild(domHeading)
  }
  if (options != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerText = options
    domHeading.classList = 'options'

    domScreen.appendChild(domHeading)
  }
  if (error != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerText = error
    domHeading.classList = 'error'

    domScreen.appendChild(domHeading)
  }
}

function clearScreen() {
  const domHeading = document.querySelectorAll('.heading')
  const domBody = document.querySelectorAll('.body')
  const domOptions = document.querySelectorAll('.options')
  const domError = document.querySelectorAll('.error')

  domHeading.forEach((heading) => (heading.innerText = ''))
  domBody.forEach((body) => (body.innerText = ''))
  domOptions.forEach((options) => (options.innerText = ''))
  domError.forEach((error) => (error.innerText = ''))

  // TODO : incorporate clearScreen() into renderScreen()
  // TODO : rework how were clearing the screen, rm divs?
}

export { renderScreen, clearScreen }
