let form = document.forms[0];
let submit = form.elements.button;

submit.addEventListener('click',
    function (e) {
        e.preventDefault();

        let name = form.elements.name;
        let email = form.elements.email;

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
            window.alert('Thank you, your message has been sent!')
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


