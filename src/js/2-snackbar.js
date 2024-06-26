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

import iconError from '../img/error.svg';
import iconSucces from '../img/succes.svg';

/////////////////////////////////////////////////////////////////

const form = document.querySelector('.form');

function createPromise(event) {
  event.preventDefault();
  const delay = event.target.delay.value;
  const state = event.target.state.value;

  return new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(`Fulfilled promise in ${delay} ms`);
      }, delay);
    } else {
      setTimeout(() => {
        reject(`Rejected promise in ${delay} ms`);
      }, delay);
    }
  });
}

form.addEventListener('submit', event => {
  createPromise(event)
    .then(message => {
      iziToast.success({
        position: 'topRight',
        progressBarColor: 'rgb(50, 97, 1)',
        backgroundColor: 'rgb(89, 161, 13)',
        iconUrl: iconSucces,
        message: message,
        messageColor: 'rgb(255, 255, 255)',
      });
    })
    .catch(message => {
      iziToast.error({
        position: 'topRight',
        progressBarColor: 'rgb(181, 27, 27)',
        backgroundColor: 'rgb(239, 64, 64)',
        iconUrl: iconError,
        message: message,
        messageColor: 'rgb(255, 255, 255)',
      });
    });
});
