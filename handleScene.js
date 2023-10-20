import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'

function handleScene(sceneContent) {
  return new Promise((resolve) => {
    clearScreen()

    const terminalInput = document.querySelector('input')
    terminalInput.value = ''
    let terminalValue = ''

    renderScreen(sceneContent.screen_1)

    terminalInput.addEventListener('input', async function handler(e) {
      terminalValue = e.target.value

      if (terminalValue === 'yes' || terminalValue === 'no') {
        await addDelay(1000)

        this.removeEventListener('input', handler)

        terminalInput.value = ''
        clearScreen()
        renderScreen(sceneContent.screen_2)

        await addDelay(1000)

        clearScreen()
        renderScreen(
          terminalValue === 'yes'
            ? sceneContent.screen_3_yes
            : sceneContent.screen_3_no
        )

        await addDelay(2000)
        clearScreen()
        await addDelay(2000)

        resolve()
      }
    })
  })
}

export { handleScene }
