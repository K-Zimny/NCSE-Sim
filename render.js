import { content } from './content.js'

const domScreen = document.querySelector("[data-component='screen']")

const renderScreen = ({ heading, body, options, error }) => {


  //   console.log(content)
  //   console.log(heading)
  //   console.log(body)
  //   console.log(options)
  //   console.log(error)

  domScreen.hasChildNodes() ? clearScreen() : '';

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
  const domHeading = document.querySelector('.heading')
  const domBody = document.querySelector('.body')
  const domOptions = document.querySelector('.options')
  const domError = document.querySelector('.error')

  domHeading.innerText = ''
  domBody.innerText = ''
  domOptions.innerText = ''
  domError.innerText = ''
}

export { renderScreen }
