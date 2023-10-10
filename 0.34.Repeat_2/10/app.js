//10. Добавить переключение песен

const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');
const btnPlay = document.querySelector('.play');
const audio = document.querySelector('audio');
const artist = document.querySelector('.artist');
const nameOfSong = document.querySelector('.nameOfSong')
const songCover = document.querySelector('.songCover')

let flag = false;
const songs = [
    { id: 1, path: './songs/song1.mp3', artist: 'instasamka', nameOfSong: 'за дкеьги да', songCover: 'background-image: ;' },
    { id: 1, path: './songs/song2.mp3', artist: 'drake', nameOfSong: 'за дкеьги да2', songCover: 'background-image: ;' },
    { id: 1, path: './songs/song3.mp3', artist: 'miyagi', nameOfSong: 'за дкеьги да3', songCover: 'background-image: ;' }
];

let currentIndexSong = 0;

btnPlay.addEventListener('click', () => {
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
    if (flag == false) {
        audio.play();
        this.style = 'background-image:url(./hfewikw/pause)'
        btnPlay.textContent = 'pause';
        flag = true;
    } else {
        audio.pause();
        flag = false;
        btnPlay.textContent = 'play'
    }
});

btnBack.addEventListener('click', () => {
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
    if (currentIndexSong == 0) return;
    currentIndexSong--; ''
    audio.src = songs[currentIndexSong].path;
    audio.play();
    flag = true;
    btnPlay.textContent = 'pause'
});



btnNext.addEventListener('click', () => {
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
    if (currentIndexSong == songs.length - 1) return;
    currentIndexSong++;
    audio.src = songs[currentIndexSong].path;
    audio.play();
    flag = true;
    btnPlay.textContent = 'pause'
});