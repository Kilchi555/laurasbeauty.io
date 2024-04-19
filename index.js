// Initialization for ES Users
import {
    Collapse,
    Dropdown,
    Ripple,
    Carousel,
    Input,
    initTWE
} from 'tw-elements';

initTWE({ Collapse, Dropdown, Ripple, Carousel, Input });

const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "mail.infomaniak.com",
        Username : "info@laurasbeauty.ch",
        Password : "fisLW95_2",
        To : 'info@laurasbeauty.ch',
        From : "info@laurasbeauty.ch",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
});