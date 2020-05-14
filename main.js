function validation() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('errorMessage');
    var text;

    errorMessage.style.padding = '1.2rem';
    errorMessage.style.marginTop = '2rem';
    errorMessage.style.fontWeight = 'bold';

    if (name.length < 2) {
        text = 'Please Enter a Valid Name';
        errorMessage.innerHTML = text;
        return false;
    } else if (email.length < 5 && !email.includes('@') && !email.includes('.')) {
        text = 'Please Enter a Valid Email Address';
        errorMessage.innerHTML = text;
        return false;
    } else if (message.length < 2) {
        text = 'Please Enter More Than 2 Characters';
        errorMessage.innerHTML = text;
        return false;
    } else {
        errorMessage.hidden = true;
        return true;
    }
}

const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

$('a.nav-link').click(function () {
    $('body').removeClass('open');
});