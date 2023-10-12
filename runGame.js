'use strict'

import { addDelay } from './core/addDelay/addDelay.js'
import { renderScreen, clearScreen } from './render.js'
import { content } from './content.js'

// Setup
console.clear()
console.log('%cRUN GAME', 'color: red')

// run
// TODO : If you refresh the screen you will lose your progress lol.
// TODO : Waiting for each screen once this gets project gets bigger will suck. Need to think about this for debugging? Or just comment out section?
function runGame() {
  // ---------------------------------------------------------------
  // Check Core Temp?
  // TODO: Can I await the resolution of my function?
  // TODO : function checkTemp(){}; await checkTemp(); ????

  let checkTempRan = false;
  renderScreen(content.checkTemp.screen_1)


  //- User Input

  const terminalInput = document.querySelector('input');
  let terminalValue = "";
  
  terminalInput.addEventListener('input', function handler(e) {
    terminalValue = e.target.value
    console.log('terminal value:', e.target.value)
    if (terminalValue === 'yes') {
      this.removeEventListener('input', handler)
    }
    // if(terminalValue === 'yes') {
    //   terminalInput.removeEventListener('input', (e) => {
    //         terminalValue = e.target.value
    //       console.log('terminal value:', e.target.value)
    //       this.removeEventListener('input', handler)
    //   }
    //   )
    // }
  })


    // Vent Gas
    // if (ventG)
  // })

  //   async function checkTemp(e) {
  //   terminalValue = e.target.value
  //   console.log('terminal value:', e.target.value)

  //   if (terminalValue === 'yes') {
  //         await addDelay(1000)

  //     clearScreen()
  //     renderScreen(content.checkTemp.screen_2)
  //         await addDelay(1000)

  //     clearScreen()
  //     renderScreen(content.checkTemp.screen_3_yes)
  //         await addDelay(1000)

  //   } else if (terminalValue === 'no') {
  //     clearScreen()
  //     renderScreen(content.checkTemp.screen_2)
  //     await addDelay(1000)

  //     clearScreen()
  //     renderScreen(content.checkTemp.screen_3_no)
  //     await addDelay(1000)
  //   }
  // }

//     terminalInput.removeEventListener('input',  ()=>{});
//     // return new Promise(resolve =>  btn.onclick = () => resolve());
//   })
// }
}
    const checkTemp = async () => {
      console.log("hello")
      // terminalValue = e.target.value
      // console.log('terminal value:', e.target.value)
      // Check Temp
      // if (checkTemp === false) {
      //   if (terminalValue === 'yes') {
      //     await addDelay(1000)

      //     clearScreen()
      //     renderScreen(content.checkTemp.screen_2)
      //     await addDelay(1000)

      //     clearScreen()
      //     renderScreen(content.checkTemp.screen_3_yes)
      //     await addDelay(1000)

      //     checkTempRan = true
      //   } else if (terminalValue === 'no') {
      //     clearScreen()
      //     renderScreen(content.checkTemp.screen_2)
      //     await addDelay(1000)

      //     clearScreen()
      //     renderScreen(content.checkTemp.screen_3_no)
      //     await addDelay(1000)

      //     checkTempRan = true
      //     terminalInput.removeEventListener('input', true)
      //   }
      // }
    }

setTimeout(runGame, 1200) // Quality of life



















/*
  await addDelay(1000)

  clearScreen()
  renderScreen(content.checkTemp.screen_2)
  await addDelay(1000)

  //- If input yes, show the yes screen. Else run a different screen.
  //- renderScreen(content.checkTemp.screen_3.yes)?
  clearScreen()
  renderScreen(content.checkTemp.screen_3)

  await addDelay(2000)

  // ----------------------------------------------------------------
  // Vent gas?
  clearScreen()
  renderScreen(content.ventGas.screen_1)
  //- User Input
  await addDelay(1000)

  clearScreen()
  renderScreen(content.ventGas.screen_2)
  await addDelay(1000)

  clearScreen()
  renderScreen(content.ventGas.screen_3)

  await addDelay(2000)

  // ----------------------------------------------------------------
}

setTimeout(runGame, 1200) // Quality of life
*/