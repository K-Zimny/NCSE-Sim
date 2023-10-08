const domTransition = document.querySelector("[data-component='transition']")

function transition(transitionDuration, transitionText) {
  console.groupCollapsed(`%ctransition()`, 'color: Green;') // debug
  console.log(`transition() Started - ${transitionText} ,${transitionDuration}`)

  domTransition.innerText = transitionText

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `transition() Complete - ${transitionText} ,${transitionDuration}`
      )
      console.groupEnd('transition()')

      resolve()
    }, transitionDuration)
  })
}

export { transition }
