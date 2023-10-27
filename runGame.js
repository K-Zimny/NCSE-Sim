'use strict'

import { handleScene } from './handleScene.js'
import { content, userAnswers } from './content.js'
import { renderScreen } from './render.js'

async function runGame() {
  await handleScene(content.nuclearTrolly_1)
  await handleScene(content.nuclearTrolly_2)
  await handleScene(content.nuclearTrolly_3)
  await handleScene(content.nuclearTrolly_4)
  await handleScene(content.nuclearTrolly_5)
  await handleScene(content.nuclearTrolly_6)
  await handleScene(content.nuclearTrolly_7)
  await handleScene(content.nuclearTrolly_8)
  await handleScene(content.nuclearTrolly_9)
  await handleScene(content.nuclearTrolly_10)
  await handleScene(content.nuclearTrolly_11)
  await handleScene(content.nuclearTrolly_12)
  await handleScene(content.nuclearTrolly_13)
  await handleScene(content.nuclearTrolly_14)
  // await handleScene(content.isSisyphusHappy)
  // await handleScene(content.isSisyphusHappy)
  // await handleScene(content.andKey)
  // await handleScene(content.welcome)
  // await handleScene(content.radiationContainment)
  // await handleScene(content.checkTemp)
  // await handleScene(content.ventGas)
  // await handleScene(content.removeControlRod)
  handleScene(content.userAnswerReport)
  console.table(userAnswers)
}

setTimeout(runGame, 120)
