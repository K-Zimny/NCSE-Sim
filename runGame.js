'use strict'

import { transition } from './core/transition/transition.js'
/*
// import { domGetter } from './core/domGetter/domGetter.js'
*/

const domScreen = document.querySelector("[data-component='screen']")
const domMessage = document.querySelector("[data-component='message'")
const domOptions = document.querySelector("[data-component='options']")
const domReturn = document.querySelector("[data-component='return']")
const domInput = document.querySelector('input')

import { content } from './content.js'

// ========== < runGame > ==========

// Setup - run necessary setup functions,  clean up console for debug
console.clear()
console.log('%cRUN GAME', 'color: red')
console.log(' ')

/*
domGetter()
*/

async function runGame() {
  // TODO, clean up content object
  domMessage.innerText = content.phase1.messageText
  domOptions.innerText = content.phase1.optionsText
  console.log('A user types their answer: "YES"') // Should I await the user input in an async function();?
  content.phase1.userAnswer = 'YES'

  console.log(content.phase1)

  await transition(
    content.phase1.transitionDuration,
    content.phase1.transitionText
  )

  domReturn.innerText = content.phase1.returnText
}

setTimeout(runGame, 1200) // Quality of life, easier on eyes in debug
