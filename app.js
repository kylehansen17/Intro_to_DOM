const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


// Select all spans, iterate over them, and assign them each one of the
// colors from the colors array
// const colors = ['red', 'orange', 'yellow', 'green'];
// const span = document.querySelectorAll('span');

// for (let i = 0; i < span.length; i++) {
//     span[i].style.color = color[i];
// }


// Creating new elements in DOM
const newH3 = document.createElement('h3')

newH3.innerText = 'I am new!'
document.body.appendChild(newH3)