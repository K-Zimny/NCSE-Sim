function transition(message, time) {
  console.groupCollapsed(`%ctransition()`, 'color: Green;') // debug
  console.log(`transition() Started - ${message} ,${time}`)

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`transition() Complete - ${message} ,${time}`)
      console.groupEnd('transition()')

      resolve()
    }, time)
  })
}

export { transition }
