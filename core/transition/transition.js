function transition(duration, text) {
  console.groupCollapsed(`%ctransition()`, 'color: Green;') // debug
  console.log(`transition() Started - ${text} ,${duration}`)

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`transition() Complete - ${text} ,${duration}`)
      console.groupEnd('transition()')

      resolve()
    }, duration)
  })
}

export { transition }
