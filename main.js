'use strict'

// =====================
// TODO : Be able to import transition() from another file instead of creating in main.js

/* 
import transition from '/core/transition/transition.js'
import default './core/transition/transition.js'
*/

function transition() {
  console.log('transition() Started - 1000')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
      console.log('transition() Complete - 1000')
    }, 1000)
  })
}

// ==========

// ========== < runGame > ==========

async function runGame() {
  // Setup
  console.clear()
  console.log(' ')
  console.log('Game Started')
  console.log(' ')

  // Run
  console.log('A user types their answer')
  await transition()
  console.log('A new screen is shown ')
}

setTimeout(runGame, 400) // Quality of life, easier on eyes
