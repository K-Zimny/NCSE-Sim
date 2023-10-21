const content = {
  checkTemp: {
    screen_1: {
      heading: 'Check Core Temperature?',
      body: 'Returns status of reactor core #17',
      options: '[YES / NO]',
      error: 'No Errors present',
    },
    screen_2: {
      heading: 'Loading...',
    },
    screen_3_yes: {
      heading: 'Core Temperature: Normal.',
    },
    screen_3_no: {
      heading: 'Core Temperature: undefined',
    },
  },
  ventGas: {
    screen_1: {
      heading: 'Vent Gas?',
      body: 'Open radium actuator to relieve core gases. Venting prevents explosions',
      options: '[YES / NO]',
    },
    screen_2: {
      heading: 'Venting...',
    },
    screen_3_yes: {
      heading: 'Gas vented',
    },
    screen_3_no: {
      error: 'Error; exit status:1;',
    },
  },
  removeControlRod: {
    screen_1: {
      heading: 'Remove Control Rod?',
      body: 'Removes neutron control device from core.',
      options: '[YES / NO]',
    },
    screen_2: {
      heading: 'Processing...',
    },
    screen_3_yes: {
      error: 'Danger lol',
    },
    screen_3_no: {
      heading: 'Good job Sector 7G',
    },
  },
}

let userAnswers = []

export { content, userAnswers }
