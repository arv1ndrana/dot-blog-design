const nameLength = document.querySelectorAll('#name')[0].textContent.length;
const dateLength = document.querySelectorAll('#date')[0].textContent.length;

const totalLength = nameLength + dateLength;
const dotLength = 100 - totalLength;


document.getElementById("dots").textContent = " . ".repeat(dotLength);