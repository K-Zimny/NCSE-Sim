function transition(transitionDuration, transitionText) {
  console.groupCollapsed(`%ctransition()`, 'color: Green;') // debug
  console.log(`transition() Started - ${transitionText} ,${transitionDuration}`)

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
