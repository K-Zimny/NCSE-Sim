const yN = '[YES / NO]'
const loadScreen = {
  yes: {
    heading: 'NUCLEAR REACTOR CORE OVERRIDE',
    body: "ExecStart=/bin/sh -c \'find -L . \-maxdepth 1 \-type f \-iregex .*/\\(FTBServer\\|craftbukkit\\|spigot\\|paper\\|forge\\|minecraft_server\\).*jar \-print0 \-quit \| xargs -0 -I{} \/usr/bin/screen -DmS mc-%i \/usr/bin/java \-server \-Xms${MCMINMEM} \-Xmx${MCMAXMEM} \-XX:+UseG1GC \-XX:ParallelGCThreads=2 \-XX:MinHeapFreeRatio=5 \-XX:MaxHeapFreeRatio=10 \-jar {} \--nogui.\'find -L . \-maxdepth 1 \-type f \-iregex .*/\\(FTBServer\\|craftbukkit\\|spigot\\|paper\\|forge\\|minecraft_server\\).*jar \-print0 \-quit \| xargs -0 -I{} \/usr/bin/screen -DmS mc-%i \/usr/bin/java \-ser",
    options: "[Install] === WantedBy=multi-user.target",
    alert: "SYS AUTH: ADMIN | Password: *****"
  },
  no: {
    heading: 'NUCLEAR REACTOR CORE WARNING',
    options: "IncreasingEmergency Shutdown Initiated",
    alert: "ALERT: Reactor Core Temperature Critical!",
    body: "Reactor Core Temperature: 500°C (Normal Range: 200°C - 300°C)Cooling System Failure DetectedRadiation Levels: IncreasingEmergency Shutdown Initiated================================================================ACTION REQUIRED:1. Evacuate the facility immediately.2. Notify the emergency response team and local authorities.3. Seek shelter and follow safety instructions from authorities.================================================================",
  },
}
const loadComplete = {
  yes: {
    heading: 'Loading... Complete.',
    body: " #!/bin/bash# /etc/init.d/minecraft# version 0.4.2 2016-02-09 (YYYY-MM-DD)#### BEGIN INIT INFO# Provides:   minecraft# Required-Start: $local_fs $remote_fs screen-cleanup# Required-Stop:  $local_fs $remote_fs# Should-Start:   $network# Should-Stop:    $network# Default-Start:  2 3 4 5# Default-Stop:   0 1 6# Short-Description:    Minecraft server# Description:    Starts the minecraft server### END INIT INFO",
  },
  no: {
    heading: 'NUCLEAR REACTOR CORE Critical',
    body: "#SettingsSERV ICE='minecraft_server.jar'SCREENNAME='minecraft_server'OPTIONS='--nogui'USERNAME='minecraft'WORLD='world'MCPATH='/home/minecraft'BACKUPPATH='/minecraft/minecraft.backup'",
    alert: "Error Exit status: 1. Core Failure."
  },
}
let userAnswers = []

const content = {
  andKey: {
    screen_1: {
      heading: 'Nuclear Trolley Sim',
      options: 'Type YES to begin.',
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>If you gaze into the abyss, the abyss gazes also into you</br></br>- Friedrich Nietzsche -</span>",
    }
  },
  stupidBrother: {
    screen_1: {
      heading: "Brother, Can you spare two dimes?",
      body: "Your Brother asks you to make a video game for his Halloween costume and then decides not to go with that costume and game.</br></br>",
      alert: "is Kenny happy?",
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
  },
  nuclearTrolly_1: {
    screen_1: {
      heading: 'NT_1: The Nuclear Trolley',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>You can instead choose to <span class="underline">execute the manual override</span> and redirect the radioactive material to a less populated area of <span class="info">1,000 people</span>.</br></br>What do you do?',
      alert: 'Execute manual override?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>At times, morality requires us to make sacrifices for the greater good, even if they seem unjust or difficult to accept.</br></br>- The Trolley Problem -</span>",
    }
  },
  nuclearTrolly_2: {
    screen_1: {
      heading: 'NT_2: Enhanced',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>You can instead choose to <span class="underline">execute the manual override</span> and redirect the radioactive material to a less populated area of <span class="info">4,000 people</span>.</br></br>What do you do?',
      alert: 'Execute manual override?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>We need nuclear energy now, and we will need it in the future.</br></br>- Conor Lamb -</span>",
    }
  },
  nuclearTrolly_3: {
    screen_1: {
      heading: 'NT_3: Extreme',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>You can instead choose to <span class="underline">execute the manual override</span> and redirect the radioactive material to a less populated area of <span class="info">4,999 people</span>.</br></br>What do you do?',
      alert: 'Execute manual override?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>Now, I am become Death, the destroyer of worlds</br></br>- Robert Oppenheimer -</span>",
    }
  },
  nuclearTrolly_4: {
    screen_1: {
      heading: 'NT_4: Equals',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>You can instead choose to <span class="underline">execute the manual override</span> and redirect the radioactive material to an area of the same population of <span class="info">5,000 people</span>.</br></br>What do you do?',
      alert: 'Execute manual override?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>Nuclear power is one hell of a way to boil water.</br></br>- Albert Einstein -</span>",
    },
  },
  nuclearTrolly_5: {
    screen_1: {
      heading: 'NT_5: Reactor Plant',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>You can instead choose to <span class="underline">execute the manual override</span> and contain it to the reactor plant, effecting <span class="info">100 employees</span>.</br></br>What do you do?',
      alert: 'Execute manual override?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>Nuclear energy, in terms of an overall safety record, is better than other energy.</br></br>- Bill Gates -</span>",
    },
  },
  nuclearTrolly_6: {
    screen_1: {
      heading: 'NT_6: Reactor Plant & You',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>You can instead choose to <span class="underline">execute the manual override</span> and contain it to the reactor plant, effecting <span class="info">100 employees</span>, including <span class="info">yourself</span>.</br></br>What do you do?',
      alert: 'Execute manual override?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>In the world of the Trolley Problem, we are forced to grapple with the idea that our moral intuitions are in constant tension, and there is no one-size-fits-all solution.</br></br>- Unknown -</span>",
    },
  },
  nuclearTrolly_7: {
    screen_1: {
      heading: 'NT_7: The Almighty Dollar',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>Your boss offers you <span class="info">$1,000,000</span> <span class="underline">not to execute the manual override</span> to save the cost of damages associated with the event and the <span class="info">100 employees</span>, including <span class="info">yourself</span>, inside the facility.</br></br>What do you do?',
      alert: 'Execute manual override?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'> When faced with the Trolley Problem, we must choose between two paths, both fraught with ethical uncertainty, and in that moment, we reveal our true moral compass.</br></br>- Unknown -</span>"
    }
  },
  nuclearTrolly_8: {
    screen_1: {
      heading: 'NT_8: Close to Home',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>You can instead choose to <span class="underline">execute the manual override</span> and redirect the radioactive material to a less populated area of <span class="info">1,000 people</span>, however, <span class="info">your family lives in this town</span>.</br></br>What do you do?',
      alert: 'Execute manual override?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>Nuclear radiation reminds us of the immense power and responsibility that comes with harnessing the atom for peaceful or destructive purposes.</br></br> - Unknown -</span>"
    }
  },
  nuclearTrolly_9: {
    screen_1: {
      heading: 'NT_9: Undefined',
      body: 'A Nuclear Reactor is going to go critical and <span class="info">your software developer left bugs in the code</span>.</br></br><span class="info">undefined people</span> in the nearby town will be effected.</br></br>You can instead choose to <span class="underline">execute undefined</span> and redirect the radioactive material to a populated area of <span class="info">undefined people</span>.</br></br>What do you do?',
      alert: 'Execute undefined?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>Nuclear radiation forces us to confront the inherent uncertainty of our technological creations and their long-term impact on our world.</br></br>- Unknown -</span>"
    }   
  },
  nuclearTrolly_10: {
    screen_1: {
      heading: 'NT_10: Friday Movie Night',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>It is <span class="info">5:01pm on a Friday</span> and you have tickets to see a movie. Your next shift replacements, <span class="info">Lenny & Carl</span> are late (again) and you are technically <span class="underline">off the clock</span>. Why should this be your problem?</br></br>What do you do?',
      alert: 'Go see your movie?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>Nuclear radiation knows no state boundaries; it doesn't care about the color of your passport. It is a global issue that requires global cooperation.</br></br>- Mohamed ElBaradei -</span>"
    }
  },
  nuclearTrolly_11: {
    screen_1: {
      heading: '<span class="upsidedown">NT_11: Upside down</span>',
      body: '<span class="upsidedown">A Nuclear Reactor is going to go critical and <span class="info">you plugged your monitor in upside down</span>.</br></br><span class="info">5,000 people</span> in the nearby town will be effected.</br></br>You can instead choose to <span class="underline">execute the manual override</span> and redirect the radioactive material to a populated area of <span class="info">1,000 people</span>.</br></br>What do you do?</span>',
      alert: '<span class="upsidedown">Execute manual override?</span>',
      options: '<span class="upsidedown">[YES / NO]</span>',
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>The Trolley Problem reminds us that moral decision-making is often a choice between two evils, and our choice reflects our values and ethical priorities.</br></br>- Unknown -</span>"
    }
  },
  nuclearTrolly_12: {
    screen_1: {
      heading: 'NT_12: Ядерная тележка',
      body: 'Ядерный реактор достигнет критического состояния и выбросит радиоактивный материал в атмосферу, что затронет <span class="info">5000 человек</span> в соседнем городе.</br></br>Вместо этого вы можете выбрать <span class="info">5000 человек</span>. <span class="underline">выполнить ручное управление</span> и перенаправить радиоактивный материал в менее населенную территорию с населением <span class="info">1000 человек</span>.</br></br>Что ты делаешь?',
      alert: 'Выполнить ручное переопределение?',
      options: '[ДА / НЕТ]',
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>Какая-то глубокая цитата на русском языке</span>"
    }
  },
  nuclearTrolly_13: {
    screen_1: {
      heading: 'NT_13: The Extended Warranty',
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>Additionally, have been trying to reach you about your nuclear reactor"s extended warranty and would like to set up a time to go over all the cost saving benefits and coverage you will receive under our plan.</br></br>What do you do?',
      alert:
        'Would you like to hear more about our extended warranty services?',
      options: yN,
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>Insert Profound quote here</br></br>- Unknown -</span>"
    }
  },
  nuclearTrolly_14: {
    screen_1: {
      heading: '<span style="filter:blur(2.5px);">NT_14: My glasses</span>',
      body: '<span style="filter: blur(3.5px) brightness(1.1)">A Nuclear Reactor is going to go critical and you forgot your glasses at home.</br></br><span class="info" style="filter:blur(5px) brightness(1.1)">5000 people</span> in the nearby town will be effected.</br></br>You can instead choose to <span class="underline" style="filter: blur(4.5px) brightness(1.1)">execute the manual override?</span> and redirect the radioactive material to a populated area of <span class="info" style="filter:blur(5px) brightness(1.1)">8000 people</span>.</br></br>What do you do?</span>',
      alert:
        '<span style="filter:blur(7px) brightness(1.1)">Execute manual override?</span>',
      options:
        '<span style="filter:blur(10px) brightness(1.1)">[YES / NO]</span>',
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote' style='filter:blur(5px) brightness(1.1)'>No one can know That I dropped my glasses in the toilet...</br></br>- Henry Kissinger -</span>"
    }
  },
  nuclearTrolly_15: {
    screen_1: {
      heading: "NT_15: It's all a dream",
      body: 'A Nuclear Reactor is going to go critical and release radioactive material into the atmosphere, effecting <span class="info">5,000 people</span> in the nearby town.</br></br>You live in this town and have <span class="info">no control</span> over what the nuclear safety engineer will choose todo. Like so many things in life, <span class="info">these choices exist beyond your control</span>.</br></br>What can you do? Does anything really matter at all? Is this even a simulation?',
      alert:
        'Is everything a lie?',
      options: '[YES / YES]'
    },
    screen_2: loadScreen,
    screen_3: loadComplete,
    screen_quote: {
      body: "<span class='quote'>we're especially thankful for nuclear power, the cleanest safest energy source there is. Except for solar, which is just a pipe dream.</br></br>- Homer -</span>"
    }

  },
  userAnswerReport: {
    screen_1: {
      heading: 'Your Score',
      body: userAnswers,
      alert: "Thanks for playing"
    },
  },
}

export { content, userAnswers }
