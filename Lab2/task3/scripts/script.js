var lamp = document.getElementById('lamp');
var onBtn = document.getElementById('onBtn');
var offBtn = document.getElementById('offBtn');
nBtn.onclick = function () {
   lamp.src = 'img/turn_on.jpg'; 
}
offBtn.onclick = function () {
   lamp.src = 'img/turn_off.jpg';
}