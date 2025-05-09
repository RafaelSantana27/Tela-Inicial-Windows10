


const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

  const login = document.getElementById('login').value;
  
  if(login === 'abc123') {
    console.log('Senha está correta');
    window.location.href = 'pagina_Inicial.html';
  }else {
    console.log("A senha está incorreta tente novamente");
    // botão de ok para!

  }

})