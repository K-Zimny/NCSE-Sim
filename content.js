const yN = '[YES / NO]'
let userAnswers = []

const content = {
  nuclearTrolley1: {
    screen_1: {
      heading: "Reactor Leak Detected",
      body: "Option_1: Contain reactor leak. Estimatesd facility repair cost: >1 Billlion dollars.\n\nOption_2: Release radiation into atmosphere. Expected health risks low. This will prevent a reactor shutdwon.",
      options: yN,
      error: "Release radiation into atmosphere?",
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
            heading: 'Radiation Released',
            body: 'Immediate health risks but core remains stable.',
        },
        no: {
            error: 'Core Meltdown',
            body: 'Catastrophic, long-term impact.',
        },
    },
  },
  nuclearTrolley4: {
    screen_1: {
        heading: "Malfunction: Radiation Leak",
        body: "Immediate action required. Release radiation into atmosphere or risk core meltdown?",
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
            heading: 'Radiation Released',
            body: 'Immediate health risks but core remains stable.',
        },
        no: {
            error: 'Core Meltdown',
            body: 'Catastrophic, long-term impact.',
        },
    },
},
nuclearTrolley5: {
    screen_1: {
        heading: "Core Breach: Environmental vs. Safety",
        body: "Critical decision. Divert coolant to river (environmental damage) or release it into the atmosphere (health risks)?",
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
            heading: 'Coolant Diverted',
            body: 'Environmental impact and aquatic life affected.',
        },
        no: {
            error: 'Radiation Released',
            body: 'Health risks to nearby communities.',
        },
    },
},
nuclearTrolley6: {
    screen_1: {
        heading: "Critical Decision: Plant Expansion vs. Ecosystem Preservation",
        body: "Urgent situation. Expand plant for growth (ecosystem impact) or preserve ecosystem (limited growth)?",
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
            heading: 'Expansion Approved',
            body: 'Economic growth but ecosystem impact.',
        },
        no: {
            error: 'Ecosystem Preserved',
            body: 'Limited growth, ecosystem protection.',
        },
    },
},


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