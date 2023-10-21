import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { userAnswers } from './content.js'

function handleScene(sceneContent) {
  return new Promise((resolve) => {
    clearScreen()

    const terminalInput = document.querySelector('input')
    terminalInput.value = ''
    terminalInput.focus()

    let terminalValue = ''

    renderScreen(sceneContent.screen_1)

    terminalInput.addEventListener('input', async function handler(e) {
      terminalValue = e.target.value.toUpperCase()

      if (terminalValue === 'YES' || terminalValue === 'NO') {
        await addDelay(100)

        this.removeEventListener('input', handler)

        terminalInput.value = ''
        clearScreen()
        renderScreen(sceneContent.screen_2)

        await addDelay(100)

        clearScreen()
        renderScreen(
          terminalValue === 'YES'
            ? sceneContent.screen_3_yes
            : sceneContent.screen_3_no
        )

        const answerArr = [sceneContent.screen_1.heading, terminalValue]
        userAnswers.push(answerArr)

        console.log(userAnswers)

        await addDelay(200)
        clearScreen()
        await addDelay(200)

        resolve()
      }
    })
  })
}

export { handleScene }
