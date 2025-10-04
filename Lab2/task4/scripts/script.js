var trafficLight = document.getElementById('trafficLight');

document.getElementById('redBtn').onclick = function() {
    trafficLight.src = 'img/red.png';
}

document.getElementById('yellowBtn').onclick = function() {
    trafficLight.src = 'img/yellow.png';
}

document.getElementById('greenBtn').onclick = function() {
    trafficLight.src = 'img/green.png';
}
