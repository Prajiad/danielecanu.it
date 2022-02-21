var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    autoStart: true,
    loop: false,
    delay: '100',
    cursor: '',
});

typewriter
    .typeString('Prajiad')
    .pauseFor(1000)
    .start();

var app = document.getElementById('app2');

var typewriter = new Typewriter(app, {
    autoStart: true,
    loop: false,
    delay: 'natural',
    cursor: '|',
});

typewriter
    .typeString('./prajiad/about_me/A shy guy, gamer and coder (maybe).')
    .pauseFor(1000)
    .start();

