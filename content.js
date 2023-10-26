const yN = '[YES / NO]'
let userAnswers = []

const content = {
  andKey: {
    screen_1: {
      heading: "NCSE Simulator",
      // body: "Nuclear Criticality Safety Engineer",
      options: "Press YES [Any Key] to begin."
    },
    screen_2: {
      yes: {
        heading: 'Loading...',
        body: 'init\ninfo => Loading Presets\ninfo => Updating file log'
      },
      no: {
        heading: '...',
      },
    },
    screen_3: {
      yes: {
        heading: 'Loading... Complete',
      },
      no: {
        error: 'Err',
      },
    },
  },
  welcome: {
    screen_1: {
      heading: "Email",
      body: "From: WS\n\nGood Morning admin,\nWe at Globex want to welcome you into our 'nuclear family'.\n\nShould you require assistance please do contact me.",
      options: yN,
    },
    screen_2: {
      yes: {
        heading: 'Loading...',
        body: 'init\ninfo => Loading Presets\ninfo => Updating file log'
      },
      no: {
        heading: '...',
      },
    },
    screen_3: {
      yes: {
        heading: 'Loading... Complete',
      },
      no: {
        error: 'Err',
      },
    },
  },
  radiationContainment:{
    screen_1: {
      heading: 'Reactor Core Breach Imminent',
      body: "You must decide whether to release containment gas into the atmosphere, potentially causing widespread health risks but minimizing economic disruptions, or allow a complete core meltdown that will have less immediate health impacts but devastate the local economy. ",
      options: yN,
      error: 'Release contamination into atmosphere?',
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
  isSisyphusHappy: {
    screen_1: {
      heading: 'is Sisyphus happy?',
      options: yN,
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