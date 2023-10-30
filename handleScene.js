import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { userAnswers } from './content.js'

const testingDelayTime = 1250

function handleScene(sceneContent) {
  return new Promise((resolve) => {
    clearScreen()

    renderScreen(sceneContent.screen_1)

    const terminalInput = document.querySelector('input')
    document.addEventListener('click', () => {
      terminalInput.focus()
    })

    terminalInput.value = ''
    terminalInput.focus()

    let terminalValue = ''

    terminalInput.addEventListener('input', async function handler(e) {
      terminalValue = e.target.value.toUpperCase()

      if (terminalValue === 'YES' || terminalValue === 'NO' || terminalValue === '>>> YES' || terminalValue === '>>> NO') {
        await addDelay(testingDelayTime)

        this.removeEventListener('input', handler)

        terminalInput.value = ''
        clearScreen()
        await addDelay(500)

        renderScreen(
          terminalValue === ('YES' || '>>> YES')
            ? sceneContent.screen_2.yes
            : sceneContent.screen_2.no
        )

        await addDelay(testingDelayTime)

        clearScreen()
        renderScreen(
          terminalValue === ('YES' || '>>> YES')
            ? sceneContent.screen_3.yes
            : sceneContent.screen_3.no
        )

        const answerArr = [sceneContent.screen_1.heading, terminalValue]
        userAnswers.push(answerArr)

        console.log(userAnswers)

        await addDelay(testingDelayTime)
        clearScreen()
        await addDelay(500)
        renderScreen(sceneContent.screen_quote)
        await addDelay(7000)
        clearScreen();
        await addDelay(2000)

        resolve()
      }
    })
  })
}

export { handleScene }
