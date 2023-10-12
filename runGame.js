'use strict'

import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen } from './render.js'
import { content } from './content.js'

// Setup
console.clear()
console.log('%cRUN GAME', 'color: red')

// run
async function runGame() {
  // Question 1
  renderScreen(content.checkTemp.screen_1)
    await addDelay(1000)
  renderScreen(content.checkTemp.screen_2)
    await addDelay(1000)
}

setTimeout(runGame, 1200) // Quality of life
