let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    /*1*/ '"Its not my fault." - Han Solo',
    /*2*/ '"Your focus determines your reality." - Qui-Gon Jinn',
    /*3*/ '"Do. Or do not. There is no try." - Yoda',
    /*4*/ '"Somebody has to save our skins." - Leia Organa',
    /*5*/ '"In my experience there is no such thing as luck." - Obi-Wan Kenobi',
    /*6*/ '"I find your lack of faith disturbing." - Darth Vader',
    /*7*/ '"Ive got a bad feeling about this." - Basically Everyone',
    /*8*/ '"Its a trap!" - Admiral Ackbar',
    /*9*/ '"So this is how liberty dies...with thunderous applause." - Padmé Amidala',
    /*10*/ '"Your eyes can deceive you. Dont trust them." - Obi-Wan Kenobi',
    /*11*/ '"Never tell me the odds." - Han Solo',
    /*12*/ '"RWAAARWWR!" - Chewbacca',
    /*13*/ '"Stay on target." - Gold Five',
    /*14*/ '"This is a new day, a new beginning." - Ahsoka Tano',
    /*15*/ '"This is the way." - The Mandalorian',
];

let advice = [
    /*1*/ "Use when anything goes wrong, even if it is totally your fault.",
    /*2*/ "Use in pep talks to encourage positivity and to remind others to take control of their fate.",
    /*3*/ "Use when someone needs a little tough love.",
    /*4*/ "Use when you jump in and solve a problem without breaking a sweat.",
    /*5*/ "Use to remind others hard work pays off and sitting around waiting for chance does not.",
    /*6*/ "Use anytime others doubt your plans.",
    /*7*/ "Use when walking into a situation that could end poorly.",
    /*8*/ "Use anytime you suspect something is too good to be true.",
    /*9*/ "Use sarcastically whenever anyone institutes a new policy that looks appealing on the surface but has negative repercussions.",
    /*10*/ "Use when a friend needs to be reminded to go with his or her gut feeling.",
    /*11*/ "Use whenever you are told a task cant be done.",
    /*12*/ "Use when you move a chair",
    /*13*/ "Use to keep yourself or others focused.",
    /*14*/ "Use to cheer a pal up and remind him or her that every day brings new opportunities.",
    /*15*/ "Use when one makes the right decision",
];

// combine quote and advice
// commit changes to git 
btn.addEventListener('click', function () {
    // store the random number to a variable instead of calling it twice
    const randomIndex = Math.floor(Math.random() * quotes.length);

    var randomQuote = quotes[randomIndex];
    var randomAdvice = advice[randomIndex];
    output.innerHTML = randomQuote + " " + randomAdvice;
})
