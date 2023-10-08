function domGetter() {
  const domScreen = document.querySelector("[data-component='screen']")
  const domMessage = document.querySelector("[data-component='message'")
  const domOptions = document.querySelector("[data-component='options']")
  const domInput = document.querySelector('input')

  return { domScreen, domMessage, domOptions, domInput }
}

export { domGetter }
