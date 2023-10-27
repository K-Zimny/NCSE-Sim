'use strict'

import { handleScene } from './handleScene.js'
import { content, userAnswers } from './content.js'
import { renderScreen } from './render.js'

async function runGame() {
  await handleScene(content.nuclearTrolley1)
  await handleScene(content.nuclearTrolley4)
  await handleScene(content.nuclearTrolley5)
  await handleScene(content.nuclearTrolley6)
  await handleScene(content.isSisyphusHappy)
  await handleScene(content.nuclearTrolly_1)
  // await handleScene(content.isSisyphusHappy)
  await handleScene(content.andKey)
  await handleScene(content.welcome)
  await handleScene(content.radiationContainment)
  await handleScene(content.checkTemp)
  await handleScene(content.ventGas)
  await handleScene(content.removeControlRod)
  handleScene(content.userAnswerReport)
  console.table(userAnswers)
}

setTimeout(runGame, 120)
