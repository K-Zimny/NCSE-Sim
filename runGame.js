'use strict'

import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { content } from './content.js'

console.clear()
console.log('%cRUN GAME', 'color: red')

const terminalInput = document.querySelector('input')
let terminalValue = ''

async function runGame() {
  await checkTemp()
  await addDelay(2000)
  clearScreen()
  await addDelay(2000)
  await ventGas()
  console.log('runGame() End')
}

function checkTemp() {
  return new Promise((resolve) => {
    clearScreen()
    terminalInput.value = ''
    let terminalValue = ''
    renderScreen(content.checkTemp.screen_1)
    console.log('checkTemp() Begin')

    terminalInput.addEventListener('input', async function handler(e) {
      terminalValue = e.target.value

      if (terminalValue === 'yes' || terminalValue === 'no') {
        console.log(terminalValue)

        this.removeEventListener('input', handler)

        clearScreen()
        renderScreen(content.checkTemp.screen_2)

        await addDelay(1000)

        clearScreen()
        renderScreen(
          terminalValue === 'yes'
            ? content.checkTemp.screen_3_yes
            : content.checkTemp.screen_3_no
        )

        console.log('checkTemp() End')

        resolve()
      }
    })
  })
}

function ventGas() {
  return new Promise((resolve) => {
    clearScreen()
    terminalInput.value = ''
    let terminalValue = ''
    renderScreen(content.ventGas.screen_1)
    console.log('ventGas() Begin')

    terminalInput.addEventListener('input', async function handler(e) {
      terminalValue = e.target.value

      if (terminalValue === 'yes' || terminalValue === 'no') {
        console.log(terminalValue)

        this.removeEventListener('input', handler)

        clearScreen()
        renderScreen(content.ventGas.screen_2)

        await addDelay(1000)

        clearScreen()
        renderScreen(
          terminalValue === 'yes'
            ? content.ventGas.screen_3_yes
            : content.ventGas.screen_3_no
        )

        console.log('ventGas() End')

        resolve()
      }
    })
  })
}

setTimeout(runGame, 1200) // Quality of life
