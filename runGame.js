'use strict'

import { handleScene } from './handleScene.js'
import { content, userAnswers } from './content.js'

async function runGame() {
  window.onbeforeunload = function () {
    return 'Your progress will be lost if you leave the page, are you sure?'
  }
  await handleScene(content.andKey)
  await handleScene(content.nuclearTrolly_1) // 5000 vs 1000
  await handleScene(content.nuclearTrolly_3) // 5000 vs 4999
  await handleScene(content.nuclearTrolly_4) // 5000 vs 5000
  await handleScene(content.nuclearTrolly_6)
  await handleScene(content.nuclearTrolly_7)
  await handleScene(content.nuclearTrolly_8)
  await handleScene(content.nuclearTrolly_9)
  await handleScene(content.nuclearTrolly_10)
  await handleScene(content.nuclearTrolly_11)
  await handleScene(content.nuclearTrolly_12)
  await handleScene(content.nuclearTrolly_13)
  await handleScene(content.nuclearTrolly_14)
  await handleScene(content.nuclearTrolly_15)
  handleScene(content.userAnswerReport)
  console.table(userAnswers)
}

setTimeout(runGame, 120)
