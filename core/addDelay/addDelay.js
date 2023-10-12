function addDelay(addDelayDuration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, addDelayDuration)
  })
}

export { addDelay }
