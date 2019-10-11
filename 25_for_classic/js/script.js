const divs = document.querySelectorAll('div');
console.log(divs);

for (let i = 0; i<divs.length; i++){
    divs[i].style.backgroundImage = 'linear-gradient('+(45+i*20)+'deg, darkturquoise, yellow)'
}


//с помощью FOR
for (let i=0; i < 100000; i++ ){
    if (i % 6 == 0) {
        console.log(i)
    }
}

//с помощью WHILE
/*let i = 0;
while (i < 100000){
    if (i % 6 == 0 ){
        console.log(i)
    }
    i++;
}*/
