import { addDelay } from "./core/addDelay/addDelay.js"

const domBody = document.querySelector('body')
const domScreen = document.querySelector("[data-component='screen']")
const domScreenTextContainer = domScreen.querySelector('.screen_text-container')
const domInputExists = document.querySelector('input')
const domInput = document.createElement('input')

function setHeight() {
  let vh = window.innerHeight
  domBody.style.height = `calc(${vh}px - 4rem)`
  window.addEventListener('resize', setHeight)
}

setHeight()

const renderScreen = async ({ heading, body, options, alert }) => {
  if (!domInputExists) {
    domScreen.appendChild(domInput)
  }

  if (heading != undefined) {
    const domHeading = document.createElement('h1')
    domHeading.innerHTML = heading
    domHeading.classList = 'heading'

    domScreenTextContainer.appendChild(domHeading)
    await addDelay(100);
  }
  if (body != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerHTML = body
    domHeading.classList = 'body'

    domScreenTextContainer.appendChild(domHeading)
    // await addDelay(100);
  }
  if (alert != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerHTML = alert
    domHeading.classList = 'alert'

    domScreenTextContainer.appendChild(domHeading)
    // await addDelay(100);
  }
  if (options != undefined) {
    const domHeading = document.createElement('p')
    domHeading.innerHTML = options
    domHeading.classList = 'options animate_blink'

    domScreenTextContainer.appendChild(domHeading)
  }
}

function clearScreen() {
  const domHeading = document.querySelectorAll('.heading')
  const domBody = document.querySelectorAll('.body')
  const domOptions = document.querySelectorAll('.options')
  const domalert = document.querySelectorAll('.alert')

  domHeading.forEach((heading) => heading.remove())
  domBody.forEach((body) => body.remove())
  domOptions.forEach((options) => options.remove())
  domalert.forEach((alert) => alert.remove())
  domInput ? domInput.remove() : ''
}

export { renderScreen, clearScreen }
