let form = document.forms[0];

let submit = form.elements.button;
let name = form.elements.name;
let email = form.elements.email;

let popUp = document.querySelector('.popUpMessageSent');

submit.addEventListener('click',
    function (e) {
        e.preventDefault();

        if ((name.value === '') && (email.value === '')){
            name.style.backgroundColor = '#FFBBC8';
            email.style.backgroundColor = '#FFBBC8';
            console.log('Add name and email');
        } else if (name.value === ''){
            name.style.backgroundColor = '#FFBBC8';
            console.log('Add name');
        } else if (email.value === ''){
            email.style.backgroundColor = '#FFBBC8';
            console.log('Add email');
        } else if ((name.value !== '') && (email.value !== '')){
            name.value = '';
            email.value = '';
            //window.alert('Thank you, your message has been sent!')
            popUp.style.display = 'inline';
            submit.style.display = 'none';
            name.style.display = 'none';
            email.style.display = 'none';
        }

        name.addEventListener('focus',
            function () {
                name.style.backgroundColor = '';
            });

        email.addEventListener('focus',
            function () {
                email.style.backgroundColor = '';
            });
    });

/*
let popUpClose = document.querySelector('.popUpClose');

popUpClose.addEventListener('click',
    function (e) {
    e.preventDefault();

        popUp.style.display = 'none';
    });
 */