'use strict'

import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { content } from './content.js'

// Setup
console.clear()
console.log('%cRUN GAME', 'color: red')

// run
const terminalInput = document.querySelector('input')
let terminalValue = ''

let checkTempRan = false

async function runGame() {
  await checkTemp()
}

function checkTemp() {
  renderScreen(content.checkTemp.screen_1)
  console.log('checkTemp() Begin')

  // await addDelay(3000)

  terminalInput.addEventListener('input', async function handler(e) {
    terminalValue = e.target.value

    if (terminalValue === 'yes') {
      console.log('yes')

      this.removeEventListener('input', handler)

      clearScreen()
      renderScreen(content.checkTemp.screen_2)

      await addDelay(1000)

      clearScreen()
      renderScreen(content.checkTemp.screen_3_yes)

      checkTempRan = true

      return new Promise((resolve) => {
        console.log('checkTemp() End')
        resolve()
      })
    } else if (terminalValue === 'no') {
      console.log('no')

      this.removeEventListener('input', handler)

      clearScreen()
      renderScreen(content.checkTemp.screen_2)

      await addDelay(1000)

      clearScreen()
      renderScreen(content.checkTemp.screen_3_no)

      checkTempRan = true

      return new Promise((resolve) => {
        console.log('checkTemp() End')
        resolve()
      })
    }
  })
}

setTimeout(runGame, 1200) // Quality of life
