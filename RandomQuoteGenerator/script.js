let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
    [
        '"Its not my fault." - Han Solo',
        '"Your focus determines your reality." - Qui-Gon Jinn',
        '"Do. Or do not. There is no try." - Yoda',
        '"Somebody has to save our skins." - Leia Organa',
        '"In my experience there is no such thing as luck." - Obi-Wan Kenobi',
        '"I find your lack of faith disturbing." - Darth Vader',
        '"Ive got a bad feeling about this." - basically everyone',
        '"Its a trap!" - Admiral Ackbar',
        '"So this is how liberty dies...with thunderous applause." - Padmé Amidala',
        '"Your eyes can deceive you. Dont trust them." - Obi-Wan Kenobi',
        '"Never tell me the odds." - Han Solo',
        '"RWAAARWWR!" - Chewbacca',
        '"Stay on target." - Gold Five',
        '"This is a new day, a new beginning." - Ahsoka Tano',
        '"This is the way." - Mandalorians',
        '"May the force be with you." - basically everyone'
    ];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.lenght)]
    output.innerHTML = randomQuote;
})
