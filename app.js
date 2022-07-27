var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    autoStart: true,
    loop: false,
    delay: '155',
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
    .typeString('./prajiad/about_me/A random guy, gamer and coder (maybe).')
    .pauseFor(1000)
    .start();

    var app = document.getElementById('app3');

    var typewriter = new Typewriter(app, {
        autoStart: true,
        loop: false,
        delay: 'natural',
        cursor: '',
    });
    
    typewriter
        .typeString('Not responsive yet :/')
        .pauseFor(1000)
        .start();
