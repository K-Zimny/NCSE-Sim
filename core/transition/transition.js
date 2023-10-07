function transition(message, time) {
  console.log('transition() Started - 1000')
  console.log('Loading Message: ' + message)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
      console.log('transition() Complete - 1000')
    }, time)
  })
}

export { transition }
