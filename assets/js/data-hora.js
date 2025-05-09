// Arrays com nomes dos dias e meses
const dias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const agora = new Date();

const horas = agora.getHours().toString().padStart(2, '0');
const minutos = agora.getMinutes().toString().padStart(2, '0');
const mes = agora.getMonth().toString().padStart(2, '0');
const ano = agora.getFullYear();

const diaSemana = dias[agora.getDay()];
const diaMes = agora.getDate().toString().padStart(2, '0');
const nomeMes = meses[agora.getMonth()];

// Função exportada
export function buscarDataHoraPersonalizada(horaEl, dataEl) {

  if (horaEl) horaEl.innerHTML = `<h1>${horas}:${minutos}</h1>`;
  if (dataEl) dataEl.innerHTML = `<h1>${diaSemana}, ${diaMes} de ${nomeMes}</h1>`;

}

export function buscarDataHora(horaEl, dataEl) {

  if (horaEl) horaEl.innerHTML = `${horas}:${minutos}`;
  if (dataEl) dataEl.innerHTML = `${diaMes}/${mes}/${ano}`;

}