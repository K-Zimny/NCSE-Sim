const content = {
  checkTemp: {
    screen_1: {
      heading: 'Check Core Temperature?',
      body: 'Some body Text',
      options: 'Some options',
      error: 'some error',
    },
    screen_2: {
      heading: 'Loading...',
    },
    screen_3_yes: {
      heading: "Core Temperature: Normal."
    },
    screen_3_no: {
      heading: "Did not check temp.",
    },
  },
  ventGas: {
    screen_1: {
      heading: "Vent Toxic Gas?",
      body: "Open radium actuator to relieve core gases.",
      options: "[YES / NO]"
    },
    screen_2: {
      heading: "Venting..."
    },
    screen_3: {
      error: "Error; exit status:1;"
    }
  }
}


export { content }
