const introMessages = [
    [
        "zzzz",
        "...",
        "eh... Oh!",
        "Hi! Sorry for the listlessness.",
        "I don't get many visitors, so thanks for company.",
        "My creator, Max, is a good guy, so please feel free to look around!",
        "Come check on me again tomorrow, I'll be waiting :)"
    ],
    [
        "Hi there!",
        "It's pretty rare for someone to be here",
        "Take a look around, this guy is pretty interesting",
        "Or you can stay here with me.",
        "It's nice, even though I've been here for forever."
    ],
];

const returnMessenges = [
    [
        "You actually came back",
        "Is it because of my charming personality?",
        "Or maybe you're here because of Max?",
        "Either way I'm happy. It's because of Max that I'm alive.",
        "...",
        "Ah, you're wondering why I'm happy despite my staying here?",
        "I was built for particular reason, and I recognize that.",
        "It's better to look positively than negatively, you know.",
        "It's what Max would've thought too."
    ],
    [
        "Welcome to Amida Elevator Station.",
        "Have a safe trip!",
        "...That's one of my favorite games, Ghostrunner.",
        "Max has played it too. Not in a while, but yeah.",
        "He's been busy with other things, so he can't play.",
        "College and job applications and stuff.",
        "Anyway, like last time. Enjoy your stay!"
    ],
    [
        "...",
        "eh?",
        "GAH! You caught me sleeping again!",
        "Hey man I need sleep too!",
        "At least you have a bed, I have...",
        "...a cloud?",
        "Yeah, I'm pretty lightweight, that's why I can sleep on one.",
        "Good one, right?",
        "Anyway, go do your thing. I'll be here."
    ]
]

const defaultMessages = [
    [
        "Hi there!",
        "Back again I see, enjoy your stay!"
    ],
    [
        "Welcome back. Hope you brought pizza."
    ],
    [
        "Did you know... pigs can fly?",
        "...",
        "Wait, they can't?",
        "Daaaaaaang"
    ],
    [
        "Fun fact, Max is allergic to cats."
    ]
]

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function getMessage(visits) {
    console.log('Got number of visits: %d', visits);

    if (visits <= 1)
    {
        var messageStack = [];
        for (let i = 0; i < returnMessenges.length; i++) messageStack.push(i);
        localStorage.setItem('messageStack', messageStack.sort((a,b) => 0.5 - Math.random()));
        return introMessages[getRandomInt(0, introMessages.length)];
    }
    else if (visits <= 4)
    {
        return returnMessenges[localStorage.getItem('messageStack').pop()]
    }
    else
    {
        return defaultMessages[getRandomInt(0, defaultMessages.length)];
    }
}
