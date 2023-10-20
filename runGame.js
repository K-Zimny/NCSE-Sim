'use strict'

import { handleScene } from './handleScene.js'
import { content } from './content.js'

async function runGame() {
  await handleScene(content.checkTemp)
  await handleScene(content.ventGas)
  await handleScene(content.removeControlRod)
}

setTimeout(runGame, 1200)
