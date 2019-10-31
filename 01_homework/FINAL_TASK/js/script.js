window.addEventListener('DOMContentLoaded',function () {
    const APIKey = 'bf7c6e155eea7fd1ee828f0134cd6aaa';
    const city = 'Moscow';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url, true);
    xhr.send();

    if (xhr.status != 200){
        console.log(xhr.status + ' ' +xhr.statusText);
    } else {
        let DATA = JSON.parse(xhr.response);
        let temp = (DATA.main.temp - 273).toFixed(1);
        console.log(temp);
    }

    class Person{
        constructor(name){
            this.name = name;
            this.happiness = 0;
        }

        hasCat() {
            return this.happiness += 1;
        }

        hasRest() {
            return this.happiness += 1;
        }

        hasMoney() {
            return this.happiness += 1;
        }

        isSunny() {
            if (temp > 15){
                return this.happiness += 1;
            } else {
                return this.happiness
            }
        }
    }

    const form = document.forms[0];
    console.log(form);
    form.onsubmit = function (e) {
        e.preventDefault();
    }
});