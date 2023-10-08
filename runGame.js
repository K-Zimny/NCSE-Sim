'use strict'

import { transition } from './core/transition/transition.js'

// ========== < runGame > ==========

// Setup - // clean up console for debug
console.clear()
console.log('%cRUN GAME', 'color: red')
console.log(' ')

async function runGame() {
  console.log('A screen is shown with a question and 2 options')
  console.log('A user types their answer')

  await transition(1000, 'Transition Screen Message')

  console.log('A new screen and question is shown')
}

setTimeout(runGame, 800) // Quality of life, easier on eyes in debug
