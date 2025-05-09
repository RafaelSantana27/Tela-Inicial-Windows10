
import { buscarDataHora } from "./data-hora.js";


// Seleciona os elementos da página
const hora = document.querySelector('#hora');
const data = document.querySelector('#data');


// Atualiza a data/hora ao carregar
buscarDataHora(hora, data);

// Atualiza a cada minuto
setInterval(() => buscarDataHora(hora, data), 60000);