window.addEventListener('DOMContentLoaded',function () {

    class Person{
        constructor(name, temp){
            this.name = name;
            this.happiness = 0;
            this.temp = temp;
        }

        hasLove() {
            return this.happiness += 1;
        }

        hasRest() {
            return this.happiness += 1;
        }

        hasMoney() {
            return this.happiness += 1;
        }

        isSunny() {
            if (this.temp > 15){
                return this.happiness += 1;
            } else {
                return this.happiness;
            }
        }
        get() {
            console.log(this.happiness)
        }

        totalCheck(){
            const icon = document.querySelector('.icon');
            if (this.happiness == 4){
                icon.innerHTML = '😍️';
            } else if (this.happiness == 3 || this.happiness == 2){
                icon.innerHTML = '☺️';
            } else {
                icon.innerHTML = '😭';
            }
        }
    }

    const APIKey = 'bf7c6e155eea7fd1ee828f0134cd6aaa';
    const city = 'Sydney';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url, false);
    xhr.send();

    let tempData = 0;
    if (xhr.status != 200){
        console.log(xhr.status + ' ' + xhr.statusText);
    } else {
        var DATA = JSON.parse(xhr.response);
        console.log(DATA);
        tempData = (DATA.main.temp - 273).toFixed(1);  //var виден снаружи if для экземпляра person
        console.log(tempData);
    }

    const form = document.forms[0];


        console.log(form);


        form.onsubmit = function (e) {
            e.preventDefault();

            const nameEntered = form.elements.name.value;
            const love = form.elements.love.value;
            const rest = form.elements.rest.value;
            const money = form.elements.money.value;


            let boo = new Person(nameEntered, tempData);

            if (love.toLowerCase() === 'yes'){
                boo.hasLove();
            }

            if (rest.toLowerCase() === 'yes'){
                boo.hasRest();
            }

            if (money.toLowerCase() === 'yes'){
                boo.hasMoney();
            }

            boo.isSunny();
            boo.get();

            const personName = document.querySelector('.personName');

            personName.innerHTML = nameEntered;

            boo.totalCheck()

        }


});


