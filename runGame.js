'use strict'

import { transition } from './core/transition/transition.js'
import { renderScreen } from './render.js'
import { content } from './content.js'

// Setup
console.clear()
console.log('%cRUN GAME', 'color: red')

// run
async function runGame() {
  renderScreen(content.question_1.screen_1)
    await transition(1000)
  renderScreen(content.question_1.screen_2)
}

setTimeout(runGame, 1200) // Quality of life
