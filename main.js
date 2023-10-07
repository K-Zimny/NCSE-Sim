'use strict'

import { transition } from './core/transition/transition.js'

// ========== < runGame > ==========

async function runGame() {
  // Setup - // clean up our console for debug

  console.clear()
  console.log(' ')
  console.log('Game Started')
  console.log('_________________________________')
  console.log(' ')

  // Run

  console.log('A user types their answer')
  await transition('Transition Screen Message', 1000)
  console.log('A new screen is shown ')
}

setTimeout(runGame, 400) // Quality of life, easier on eyes in debug
