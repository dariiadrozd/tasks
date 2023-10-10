

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const audio = document.querySelector('audio');

    audio.scr = './song1.mp3';
    audio.play();
})
