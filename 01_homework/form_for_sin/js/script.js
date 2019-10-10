const form = document.forms[0];
const insertSin = document.querySelector('.totalSin');
const insertCos = document.querySelector('.totalCos');

form.onsubmit = function (e) {
    e.preventDefault();

    if (form.elements.angle.value % 90 == 0){
        insertSin.innerHTML = Math.sin(form.elements.angle.value * ( Math.PI / 180)).toFixed(0);
        insertCos.innerHTML = Math.cos(form.elements.angle.value * ( Math.PI / 180)).toFixed(0);
    } else {
        insertSin.innerHTML = Math.sin(form.elements.angle.value * ( Math.PI / 180)).toFixed(3);
        insertCos.innerHTML = Math.cos(form.elements.angle.value * ( Math.PI / 180)).toFixed(3);
    }

    //insertSin.innerHTML = Math.sin(form.elements.angle.value * ( Math.PI / 180)).toFixed(3);
    //insertCos.innerHTML = Math.cos(form.elements.angle.value * ( Math.PI / 180)).toFixed(3);

};







