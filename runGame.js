'use strict'

import { handleScene } from './handleScene.js'
import { content, userAnswers } from './content.js'

async function runGame() {
  await handleScene(content.checkTemp)
  await handleScene(content.ventGas)
  await handleScene(content.removeControlRod)

  console.table(userAnswers)
}

setTimeout(runGame, 120)
