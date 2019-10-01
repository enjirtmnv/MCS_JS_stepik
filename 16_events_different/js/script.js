window.addEventListener('load', function () {
    const button = document.querySelector('.button');
    const ball = document.querySelector('.ball');
    let state = 'none';
    const par = document.querySelector('.show p');
    button.addEventListener('click', () => {
        if (state == 'none'){
            ball.style.animationPlayState = 'running';
            state = 'block'
        } else {
            ball.style.animationPlayState = 'paused';
            state = 'none'
        }
    });
    window.onscroll = () => {
        if (scrollY >= 1000) {
            par.style.opacity = 1;
        } else {
            par.style.opacity = 0.5;
        }
    }
});
//opacity меняется плавно, из-за плавности перехода в css transition: 0.5s