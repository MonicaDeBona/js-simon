const button = document.querySelector('div.btn');

let counter = 0;
let stopTime = false;


button.addEventListener('click', function() {

    if (counter < 10) {
        counter++;
        button.innerHTML = 'PLAY ' + counter;
    } else {
        button.classList.add('bg-red');
        setTimeout(() => {
            counter = 0;
            button.innerHTML = 'PLAY ' + counter;
        }, 2000);
    }
});