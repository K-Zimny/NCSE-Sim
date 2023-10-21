const domBody = document.querySelector('body')
const domScreen = document.querySelector("[data-component='screen']")
const domScreenTextContainer = domScreen.querySelector('.screen_text-container')
const domInputExists = document.querySelector('input')
const domInput = document.createElement('input')

function setHeight() {
  let vh = window.innerHeight
  domBody.style.height = `calc(${vh}px - 8rem)`
  window.addEventListener('resize', setHeight)
}

setHeight()

const renderScreen = ({ heading, body, options, error }) => {
  if (heading != undefined) {
    const domHeading = document.createElement('h1')
    domHeading.innerText = heading
    domHeading.classList = 'heading'

    domScreenTextContainer.appendChild(domHeading)
  }
  if (body != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerText = body
    domHeading.classList = 'body'

    domScreenTextContainer.appendChild(domHeading)
  }
  if (options != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerText = options
    domHeading.classList = 'options animate_blink'

    domScreenTextContainer.appendChild(domHeading)
  }
  if (error != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerText = error
    domHeading.classList = 'error'

    domScreenTextContainer.appendChild(domHeading)
  }

  if (!domInputExists) {
    domScreen.appendChild(domInput)
  }
}

function clearScreen() {
  const domHeading = document.querySelectorAll('.heading')
  const domBody = document.querySelectorAll('.body')
  const domOptions = document.querySelectorAll('.options')
  const domError = document.querySelectorAll('.error')

  domHeading.forEach((heading) => heading.remove())
  domBody.forEach((body) => body.remove())
  domOptions.forEach((options) => options.remove())
  domError.forEach((error) => error.remove())
  domInput ? domInput.remove() : ''
}

export { renderScreen, clearScreen }
