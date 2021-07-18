/**********************************Contagem regressiva*************************************/

// Data Black Friday
var countDownDate = new Date("November 25, 2021 12:00:00").getTime();

// Atualiza a contagem a cada 1 segundo
var x = setInterval(function() {

  // Data de hoje
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostra o resultado no elemento com id="countdown"
  document.querySelector("#countdown").innerHTML = (`Faltam ${days} dias  ${hours} horas ${minutes} minutos e ${seconds} segundos`)

  // Mostra um texto quando a contagem acabar
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#countdown").innerHTML = "A BLACK FRIDAY COMEÇOU!";
  }
}, 1000);

/**********************************localStorage*************************************/


let saveData = function (){
  let name = document.querySelector('#nome').value;
  let email = document.querySelector('#email').value;
  let gender = document.querySelector('#feminino').value || document.querySelector('#masculino').value;

  localStorage.setItem('Nome', name)
  localStorage.setItem('Email', email)
  localStorage.setItem('Sexo', gender)

  if ((name.length) && (email.length) && (gender.length) !== 0){
      alert('Email cadastrado com sucesso!')
  } else {
      alert('Preencha todos os campos corretamente.')
  }
}
