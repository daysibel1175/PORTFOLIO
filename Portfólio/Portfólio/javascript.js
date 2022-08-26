
// resultado final
function validarEmail(){
  let email = document.querySelector('#email');
  let error = document.querySelector('#error-email');

  console.log("entrou");

  if (email.length > 0 ){
  
    document.getElementById("#email").innerHTML="";
  }
  else
  {
    document.getElementById("error-email").innerHTML=" Email-invalido"; 
  
  }
  
  return false;
  
}
// function clearError(field) {
//     let error = container.querySelector('#error-email');
//     if(error){
//       container.removeChild(error);
//     }
//     field.classList.remove('is-invalid');
//   }
  
// function redefinirMsg(){

//     let error = document.querySelector('#error-email');
//     let email = document.querySelector('#email');

//     if (error.innerHTML == 'Email-invalido')
//     { validarEmail(' Email -invalido', field);}

//   else {
//     clearError(field);
//   }
//   }

  // comiença la API

let ul = document.querySelector('#ul');

function getApiGitHub() {
  fetch('https://api.github.com/users/daysibel1175/repos')
 .then(async res => {

    if(!res.ok) {
      throw new Error(res.status)
    }

    var data = await res.json()

    data.map(item => {
      let li = document.createElement('li')

      li.innerHTML = `
        <strong>${item.name.toUpperCase()}</strong>
        <span>URL: ${item.url}</span>
        <span>Data Criação: 
          ${Intl.DateTimeFormat('pt-BR')
            .format(new Date(item.created_at))}
        </span>
      `
      ul.appendChild(li)

    })

  }).catch(e => console.log(e))

}
getApiGitHub()

// function checkEnableSubmit(){
  
//   let error = form.querySelectorAll('#error-email');

//   if(error.length < 0){
//     enableSubmit();
//   }
//   else{
//     disableSubmit();
//   }
// }


// function enableSubmit(){
  
//   let submit = form.querySelector('[type=submit]');
//   submit.disabled = false;
// }

// function disableSubmit(){
 
//   let submit = form.querySelector('[type=submit]');
//   submit.disable = true;
// }



// testes
// function checkEnableSubmit(){
//     let error = document.querySelector('#error-email');
//     let email = document.querySelector('#email');

//     if(error.length == 0 && email.length == 0){
//       enableSubmit();
//     }
//     else{
//       disableSubmit();
//     }
//   }
// function redefinirMsg(){

//   let error = document.querySelector('#error-email');

//   if (error.innerHTML == "Email invalido"){
//     error.innerHTML = "";
//   }
// }
// lo que dio el profesor en la aula 13
// function validateEmail(e) {
//   let field = e.target;
//   let fieldValue = field.value;

//   if (fieldValue.search('@') == -1)
//   { displayError('Email não é válido', field);}
//   else {
//     clearError(field);
//   }
//   field.classList.remove('not-validate');
//   checkEnableSubmit();
// }


// function validateNotEmpty(e) {
//   let field = e.target;
//   let fieldValue = field.value;

//   if (fieldValue == '') {
//     displayError('Campo não pode ser vazio', field);
//   }
//   else{
//     clearError(field);
//   }


// field.classList.remove('not-validate'); checkEnableSubmit();
// }

// function displayError(
//   message, field)
// {
//   clearError(field)
//   field.classList.add('is-invalid');
//   let error = document.createElement('small');
//   error.style.color = 'red';
//   error.classList.add('error-message');
//   error.textContent = message;
//   field.parentElement.appendChild(error);
// }

// function clearError(field) {
//   let container = field.parentElement;
//   let error = container.querySelector('.error-message');

//   if(error){
//     container.removeChild(error);
//   }
//   field.classList.remove('is-invalid');
// }


// function checkEnableSubmit(){
//   let form = document.querySelector('#form');
//   let notValidated =  form.querySelectorAll('.not-validated');
//   let errors = form.querySelectorAll('.is-invalid');

//   if(errors.length == 0 && notValidated.length == 0){
//     enableSubmit();
//   }
//   else{
//     disableSubmit();
//   }
// }


// function enableSubmit(){
//   let form = document.querySelector('#form');
//   let submit = form.querySelector('[type=submit]');
//   submit.disabled = false;
// }

// function disableSubmit(){
//   let form = document.querySelector('#form');
//   let submit = form.querySelector('[type=submit]');
//   submit.disable = true;
// }



// document.querySelectorAll('input').forEach(el => el.classList.add('not-validate'));
// document.querySelectorAll('input.email').forEach(el => el.addEventListener('keyup', validateEmail));
// document.querySelectorAll('input.required').forEach(el => el.addEventListener('keyup', validateNotEmpty));

