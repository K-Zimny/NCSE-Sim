'use strict'

import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { content } from './content.js'

// Setup
console.clear()
console.log('%cRUN GAME', 'color: red')

// run
function runGame() {
  
  // Check Core Temp?
  (async function checkTemp() {
    renderScreen(content.checkTemp.screen_1)
    await addDelay(1000)

    clearScreen()
    renderScreen(content.checkTemp.screen_2)
    await addDelay(1000)

    clearScreen()
    renderScreen(content.checkTemp.screen_3)
  }) ();
}

setTimeout(runGame, 1200) // Quality of life
