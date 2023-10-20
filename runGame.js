'use strict'

import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { content } from './content.js'

console.clear()
console.log('%cRUN GAME', 'color: red')

const terminalInput = document.querySelector('input')

async function runGame() {
  await handleScene('checkTemp', content.checkTemp)
  await handleScene('ventGas', content.ventGas)
  console.log('runGame() End')
}

function handleScene(sceneName, sceneContent) {
  return new Promise((resolve) => {
    clearScreen()
    let terminalValue = ''
    renderScreen(sceneContent.screen_1)
    console.log(`${sceneName}() Begin`)

    terminalInput.addEventListener('input', async function handler(e) {
      terminalValue = e.target.value

      if (terminalValue === 'yes' || terminalValue === 'no') {
        console.log(terminalValue)

        this.removeEventListener('input', handler)

        clearScreen()
        renderScreen(sceneContent.screen_2)

        await addDelay(1000)

        clearScreen()
        renderScreen(
          terminalValue === 'yes'
            ? sceneContent.screen_3_yes
            : sceneContent.screen_3_no
        )

        terminalInput.value = ''
        await addDelay(2000)
        clearScreen()
        await addDelay(2000)

        console.log(`${sceneName}() End`)
        resolve()
      }
    })
  })
}

setTimeout(runGame, 1200)
