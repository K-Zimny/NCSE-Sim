function transition() {
  console.log('transition() Started')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve
      console.log('transition() Complete')
    }, 1000)
  })
}
