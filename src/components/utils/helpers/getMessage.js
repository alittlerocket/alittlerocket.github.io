// Messages arrays
const introMessages = [
    [
        "zzzzzzz....",
        "...........",
        "eh... Oh!",
        "Hi! Sorry for the listlessness.",
        "I don't get many visitors, so thanks for company.",
        "My creator, Max, is a good guy. Feel free to look around!",
        "Come check on me in 12 hrs, I'll be waiting :)"
    ],
    [
        "Hi there!",
        "It's pretty rare for someone to be here",
        "Take a look around, this guy is pretty interesting",
        "Or you can stay here with me.",
        "It's nice, even though I've been here for forever.",
        "Come back in 12 hours, I'll have something else to say."
    ],
];

const returnMessages = [
    [
        "You actually came back",
        "Is it because of my charming personality?",
        "Or maybe you're here because of Max?",
        "Either way I'm happy. It's because of Max that I exist.",
        "...",
        "Ah, you're wondering why I'm happy despite staying here?",
        "I was built for a reason, and I recognize that.",
        "It's better to look positively than negatively, yeah?",
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
        "Yeah, I'm pretty lightweight, hence why I don't fall.",
        "Good one, right?",
        "Anyway, go do your thing. I'll be here."
    ]
];

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
    ],
    [
        "Max misses playing the guitar."
    ]
];


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function getDefaultMessages()
{
    return defaultMessages[getRandomInt(0, defaultMessages.length)];
}

export function getIntroMessages()
{
    let messageStack = Array.from({ length: returnMessages.length }, (_, i) => i);
    messageStack = messageStack.sort(() => 0.5 - Math.random());
    localStorage.setItem('messageStack', JSON.stringify(messageStack));
    return introMessages[getRandomInt(0, introMessages.length)];
}

export function getReturnMessages()
{
    let messageStack = JSON.parse(localStorage.getItem('messageStack')); 
    const nextMessageIndex = messageStack.pop();
    localStorage.setItem('messageStack', JSON.stringify(messageStack));
    return returnMessages[nextMessageIndex];
}

// Main function to get the appropriate message based on visits
export function getMessage(visits) {
    console.log('Got number of visits:', visits);

    if (visits > 4)
    {
        return getDefaultMessages();
    } else if (visits <= 1) {
        return getIntroMessages();
    } else if (visits <= 4) {
        return getReturnMessages();
    } else  {
        return ['Bug encountered'];
    }
}
