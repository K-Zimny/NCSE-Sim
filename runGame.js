'use strict'

import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { content } from './content.js'

// Setup
console.clear()
console.log('%cRUN GAME', 'color: red')

// run
// TODO : Waiting for each screen once this gets project gets bigger will suck. Need to think about this for debugging? Or just comment out section?
async function runGame() {
  // ---------------------------------------------------------------
  // Check Core Temp?
  // TODO: Can I await the resolution of my function?
  // TODO : function checkTemp(){}; await checkTemp(); ????
  renderScreen(content.checkTemp.screen_1)
  //- User Input
  await addDelay(1000)

  clearScreen()
  renderScreen(content.checkTemp.screen_2)
  await addDelay(1000)

  //- If input yes, show the yes screen. Else run a different screen.
  //- renderScreen(content.checkTemp.screen_3.yes)?
  clearScreen()
  renderScreen(content.checkTemp.screen_3)

  await addDelay(2000)

  // ----------------------------------------------------------------
  // Vent gas?
  clearScreen()
  renderScreen(content.ventGas.screen_1)
  //- User Input
  await addDelay(1000)

  clearScreen()
  renderScreen(content.ventGas.screen_2)
  await addDelay(1000)

  clearScreen()
  renderScreen(content.ventGas.screen_3)

  await addDelay(2000)

  // ----------------------------------------------------------------
}

setTimeout(runGame, 1200) // Quality of life
