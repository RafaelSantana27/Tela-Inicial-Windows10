
const formLogin = document.querySelector('.login-input');
const formLoginErro = document.querySelector('.login-input-erro');
const inputSenha = document.getElementById('login');

const btn = document.getElementById('btn');
const btnErro = document.getElementById('btnErro');


btn.addEventListener('click', function(){
  
  if(inputSenha.value === 'abc123') {
      console.log('Senha está correta');
      window.location.href = 'pagina_Inicial.html';
  }else {
    console.log("A senha está incorreta tente novamente");
    formLogin.style.display = "none";
    formLoginErro.style.display = "block";
    }
})

btnErro.addEventListener('click', function(){
    formLoginErro.style.display = "none";
    formLogin.style.display = "flex";
    inputSenha.value = '';
    inputSenha.focus();
})