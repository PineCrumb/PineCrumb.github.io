
// easy code for checking if mobile or not
let isUsingMouse = false;
document.addEventListener('mousemove', () => {isUsingMouse = true;});
document.addEventListener('touchstart', () => {isUsingMouse = false;});