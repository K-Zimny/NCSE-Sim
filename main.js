'use strict'

import { transition } from './core/transition/transition.js'

// ========== < runGame > ==========

async function runGame() {
  // Setup

  console.clear()
  console.log(' ')
  console.log('Game Started')
  console.log(' ')

  // Run

  console.log('A user types their answer')
  await transition('Here is a test message', 1000)
  console.log('A new screen is shown ')
}

setTimeout(runGame, 400) // Quality of life, easier on eyes
