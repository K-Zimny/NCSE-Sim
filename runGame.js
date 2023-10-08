'use strict'

import { transition } from './core/transition/transition.js'
import { domGetter } from './core/domGetter/domGetter.js'
import { content } from './content.js'

// ========== < runGame > ==========

// Setup - // clean up console for debug
console.clear()
console.log('%cRUN GAME', 'color: red')
console.log(' ')

console.log(domGetter())

async function runGame() {
  // TODO, clean up content object
  console.log(content.phase1.messageText)
  console.log('A user types their answer')

  await transition(
    content.phase1.transitionDuration,
    content.phase1.transitionText
  )

  console.log(content.phase1.messageReturn)
}

setTimeout(runGame, 800) // Quality of life, easier on eyes in debug
