function transition(transitionDuration) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, transitionDuration)
  })
}

export { transition }
