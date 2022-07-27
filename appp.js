var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        autoStart: true,
        loop: true,
        delay: '100',
        cursor: '|',
    });

    typewriter
        .typeString('REDIRECTING<br>')
        .pauseFor(900)
        .typeString('PLEASE<br>')
        .pauseFor(200)
        .typeString('WAIT')
        .pauseFor(1000)
        .start();


var app = document.getElementById('app2');

    var typewriter = new Typewriter(app, {
        autoStart: true,
        loop: false,
        delay: 'natural',
        cursor: '✇',
    });