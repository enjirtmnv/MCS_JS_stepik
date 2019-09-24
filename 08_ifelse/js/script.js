const image = document.querySelector('.imageBlock');
let answer = prompt('How  old are you?');
answer = parseInt(answer);
 if (answer < 18) {
    image.style.backgroundImage = 'url(img/anime_school.jpg)'
 } else if (answer <= 25) {
     image.style.backgroundImage = 'url(img/anime_party.jpg)'
 } else if (answer <=50) {
     image.style.backgroundImage = 'url(img/anime_pub.jpg)'
 } else (
     image.style.backgroundImage = 'url(img/anime_room.jpg)'
 );
