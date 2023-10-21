const yN = '[YES / NO]'
let userAnswers = []

const content = {
  checkTemp: {
    screen_1: {
      heading: 'Check Core Temperature?',
      body: 'Returns status of reactor core #17',
      options: yN,
      error: 'No Errors present',
    },
    screen_2: {
      yes: {
        heading: 'Loading...',
      },
      no: {
        heading: '...',
      },
    },
    screen_3: {
      yes: {
        heading: 'Core Temperature: Normal.',
      },
      no: {
        heading: 'Core Temperature: ',
      },
    },
  },
  ventGas: {
    screen_1: {
      heading: 'Vent Gas?',
      body: 'Open radium actuator to relieve core gases. Venting prevents explosions',
      options: yN,
    },
    screen_2: {
      yes: {
        heading: 'Venting...',
      },
      no: {
        heading: '...',
      },
    },
    screen_3: {
      yes: {
        heading: 'Gas Vented',
        body: 'System Pressure: Normal',
      },
      no: {
        heading: '',
      },
    },
  },
  removeControlRod: {
    screen_1: {
      heading: 'Remove Control Rod?',
      body: 'Removes neutron control device from core.',
      options: yN,
    },
    screen_2: {
      yes: {
        heading: 'Processing...',
      },
      no: {
        heading: '...',
      },
    },
    screen_3: {
      yes: {
        heading: 'Criticality Event Imminent',
      },
      no: {
        heading: '...',
      },
    },
  },
  userAnswerReport: {
    screen_1: {
      heading: 'Your Score',
      body: userAnswers,
    },
  },
}

export { content, userAnswers }
