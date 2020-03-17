// Select Element
const selectElement = function (element) {
  return document.querySelector(element);
}

let menuTogger = selectElement('.menu-toggle');
let body = selectElement('body');

console.log({menuTogger, body});

menuTogger.addEventListener('click', function () { 
    body.classList.toggle('open');
})
