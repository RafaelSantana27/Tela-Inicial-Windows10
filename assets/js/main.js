import { buscarDataHoraPersonalizada } from './data-hora.js';

const hora = document.querySelector('.hora');
const data = document.querySelector('.data');

buscarDataHoraPersonalizada(hora, data);



function animarERedirecionar(e) {
  e.preventDefault();
  document.body.classList.add("animacao-saida");

  setTimeout(() => {
    window.location.href = e.target;
  }, 900); 
}


document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById('link-login');
    if(link) {
        link.addEventListener('click', animarERedirecionar);
    }
})