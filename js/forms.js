function validateName() {

  var firstname = document.getElementById('form_name').value;

  if(firstname.length == 0) {

    producePrompt('Name is required', 'name-error' , 'red')
    return false;

  }

  if (!firstname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('Panda want your name.','name-error', 'red');
    return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}
function validatelastname() {

  var lastname = document.getElementById('form_lastname').value;

  if(lastname.length == 0) {

    producePrompt('Panda want your lastname', 'lastname-error' , 'red')
    return false;

  }

  if (!lastname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('last name, please.','lastname-error', 'red');
    return false;

  }

  producePrompt('Valid', 'lastname-error', 'green');
  return true;

}
function validateEmail () {

  var email = document.getElementById('form_email').value;

  if(email.length == 0) {

    producePrompt('Panda want your email','email-error', 'red');
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Wrong', 'email-error', 'red');
    return false;

  }

  producePrompt('Valid', 'email-error', 'green');
  return true;

}
function validatePhone() {

  var phone = document.getElementById('form_phone').value;

    if(phone.length == 0) {
      producePrompt('Panda want your phone', 'phone-error', 'red');
      return false;
    }

    if(phone.length != 10) {
      producePrompt('Include area code.', 'phone-error', 'red');
      return false;
    }

    if(!phone.match(/^[0-9]{10}$/)) {
      producePrompt('Only digits, please.' ,'phone-error', 'red');
      return false;
    }

    producePrompt('Valid', 'phone-error', 'green');
    return true;

}



function validateMessage() {
  var message = document.getElementById('form_message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' Write something for panda','message-error','red');
    return false;
  }

  producePrompt('Valid', 'message-error', 'green');
  return true;

}

function validateForm() {
  if (!validateName() ||!validatelastname() || !validatePhone() || !validateEmail() || !validateMessage()) {
    jsShow('submit-error');
    producePrompt('Not good , you have errors ', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
  }
  else {

  }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}