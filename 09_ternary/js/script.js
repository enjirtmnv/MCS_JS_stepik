const image = document.querySelector('.imageBlock');
let answer = prompt('How  old are you?');
answer = parseInt(answer);

(answer >= 18) ? image.style.backgroundImage = 'url(img/anime_pub.jpg)' : image.style.backgroundImage = 'url(img/anime_school.jpg)';