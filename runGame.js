'use strict'

import { transition } from './core/transition/transition.js'

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

  console.log('Awaiting user Answer') // Should I await the user input in an async function();?
  let answer = ''
  addEventListener('keypress', async (e) => {
    answer += e.key
    if (e.key === 'Enter') {
      if (answer === 'YESEnter') {
        content.phase1.userAnswer = 'YES'

        await transition(
          content.phase1.transitionDuration,
          content.phase1.transitionTextYes
        )

        domReturn.innerText = content.phase1.returnTextYes
        answer = ''
      } else if (answer === 'NOEnter') {
        content.phase1.userAnswer = 'NO'

        await transition(
          content.phase1.transitionDuration,
          content.phase1.transitionTextNo
        )

        domReturn.innerText = content.phase1.returnTextNo
        answer = ''
      } else {
        await transition(1000, '...') //error wait transition()
        domReturn.innerText = content.error
        answer = ''
      }
    }
  })
}

setTimeout(runGame, 1200) // Quality of life, easier on eyes in debug
