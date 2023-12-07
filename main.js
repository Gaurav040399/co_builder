const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const rotaion = document.getElementById("rotation");

function updateRotation() {
  const rotationValueX = localStorage.getItem('arrowRotationX') || 0;
  const rotationValueY = localStorage.getItem('arrowRotationY') || 0;
  arrow1.style.transform = `rotate(${rotationValueX}deg)`;
  arrow2.style.transform = `rotate(${rotationValueY}deg)`;
}

function handleArrowRotation() {
  let rotationValueX = JSON.parse(localStorage.getItem('arrowRotationX')) || 0;
  let rotationValueY = JSON.parse(localStorage.getItem('arrowRotationY')) || 0;

  arrow1.addEventListener('load', () => {
    rotaion.innerText = 'New coordinates: X=' + window.screenX + ', Y=' + window.screenY
    checkWindowPosition();
    updateRotation();
  });

  window.addEventListener('storage', (event) => {
    if (event.key === 'arrowRotationX' && event.key === 'arrowRotationY') {
      updateRotation();
    }
  });
}

handleArrowRotation();
updateRotation();

let prevX = window.screenX;
let prevY = window.screenY;

function checkWindowPosition() {
  if (window.screenX !== prevX || window.screenY !== prevY) {
    console.log('Window position changed');
    console.log('New coordinates: X=' + window.screenX + ', Y=' + window.screenY);
    rotaion.innerText = 'New coordinates: X=' + window.screenX + ', Y=' + window.screenY
    prevX = window.screenX;
    prevY = window.screenY;
    localStorage.setItem('arrowRotationX', prevX);
    localStorage.setItem('arrowRotationY', prevY);
  }
}

setInterval(checkWindowPosition, 500);