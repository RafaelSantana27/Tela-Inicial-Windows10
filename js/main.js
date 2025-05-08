// Arrays com os nomes dos dias da semana e meses do ano 
const dia = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

let hora = document.querySelector('.hora');
let data = document.querySelector('.data');


// Função que obtém a data e hora atual 
function buscarData() {
  const agora = new Date;
  
  // Hora formatada
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  hora.innerHTML = `<h1>${horas}:${minutos}</h1>`;
  
  // Data formatada
  const diaSemana = dia[agora.getDay()];
  const diaMes = agora.getDate();
  const nomeMes = mes[agora.getMonth()];
  data.innerHTML = `<h1>${diaSemana}, ${diaMes} de ${nomeMes}</h1>`; 
}

// Chamando função
buscarData();

// Opcional: atualiza a hora a cada minuto
// setInterval(buscarData, 60000);


function animateAndRedirect(e) {
  e.preventDefault();
  document.body.classList.add("animate-out");
  setTimeout(() => {
    window.location.href = e.target.href;
  }, 900); // tempo igual ao do CSS
}





