const input = document.querySelector('.input');
const bosish = document.querySelector('.bosish');
const tozalash = document.querySelector('.tozalash');
bosish.addEventListener("click", function () {
    input.value = +input.value + 1
})
tozalash.addEventListener('click', function () {
    input.value = 0;
})