let btnPlay = document.querySelector('.button')
let video = document.querySelector('.video-box')
let btnClose = document.querySelector('.btn-close')
let play = document.querySelector('video')

btnPlay.onclick = function(){
    btnPlay.classList.add('active')
    video.classList.add('active')
    play.play();
}

btnClose.onclick = function(){
    btnPlay.classList.remove('active')
    video.classList.remove('active')
    play.pause();
}