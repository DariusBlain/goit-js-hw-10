const input = document.getElementById('input-number');
const decrementBtn = document.querySelector('.decrement-btn');
const incrementBtn = document.querySelector('.increment-btn');

decrementBtn.addEventListener('click', () => {
  input.stepDown();
});

incrementBtn.addEventListener('click', () => {
  input.stepUp();
});

//////////////////////////Buttons/////////////////////////////////
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(event) {
  event.preventDefault();
  const delay = event.target.delay.value;
  const state = event.target.state.value;

  return new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(
          iziToast.success({
            position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: 'rgb(50, 97, 1)',
            backgroundColor: 'rgb(89, 161, 13)',
            iconUrl: '../img/succes.svg',
            message: `Fulfilled promise in ${delay} ms`,
            messageColor: 'rgb(255, 255, 255)',
          })
        );
      }, delay);
    } else {
      setTimeout(() => {
        reject(
          iziToast.error({
            position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: 'rgb(181, 27, 27)',
            backgroundColor: 'rgb(239, 64, 64)',
            iconUrl: '../img/error.svg',
            message: `Rejected promise in ${delay} ms`,
            messageColor: 'rgb(255, 255, 255)',
          })
        );
      }, delay);
    }
  });
}

form.addEventListener('submit', createPromise);
