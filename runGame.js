'use strict'

import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { content } from './content.js'

// Setup
console.clear()
console.log('%cRUN GAME', 'color: red')

// run
// TODO : If you refresh the screen you will lose your progress lol.
// TODO : Waiting for each screen once this gets project gets bigger will suck. Need to think about this for debugging? Or just comment out section?

const terminalInput = document.querySelector('input')
let terminalValue = ''

let checkTempRan = false

async function runGame() {
  // ---------------------------------------------------------------

  // Check Core Temp?
  // TODO :  Can I await the resolution of my function?
  // TODO : function checkTemp(){}; await checkTemp(); ????

  //   renderScreen(content.checkTemp.screen_1)

  //   //- User Input

  //   const terminalInput = document.querySelector('input')
  //   let terminalValue = ''

  //   terminalInput.addEventListener('input', async function handler(e) {
  //     terminalValue = e.target.value
  //     console.log('terminal value:', e.target.value)

  //     if (terminalValue === 'yes') {
  //       console.log('YES')

  //       await addDelay(1000)
  //       clearScreen()
  //       renderScreen(content.checkTemp.screen_2)
  //       await addDelay(1000)

  //       clearScreen()
  //       renderScreen(content.checkTemp.screen_3_yes)
  //       await addDelay(1000)

  //       checkTemp = true
  //       this.removeEventListener('input', handler)
  //     }

  //     else if (terminalValue === 'no') {
  //       console.log('NO')

  //       clearScreen()
  //       renderScreen(content.checkTemp.screen_2)
  //       await addDelay(1000)

  //       clearScreen()
  //       renderScreen(content.checkTemp.screen_3_no)
  //       await addDelay(1000)

  //       checkTempRan = true
  //       this.removeEventListener('input', handler)
  //     }
  //   })

  console.log('Begin')
  await checkTemp()
  // console.log('End')
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
