function transition(transitionDuration, transitionText) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, transitionDuration)
  })
}

export { transition }
