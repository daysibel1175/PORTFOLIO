
function validarEmail(){
  let email = document.querySelector('#email');
  let error = document.querySelector('#error-email');
  
  if (!email.checkValidity()){
    error.innerHTML = "Email invalido";  
  }
   
}

function redefinirMsg(){

  let error = document.querySelector('#error-email');

  if (error.innerHTML == "Email invalido"){
    error.innerHTML = "";
  }
}