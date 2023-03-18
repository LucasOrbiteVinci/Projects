const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInput() {
  const userNameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (userNameValue === '') {
    setErrorFor(username, 'O Nome de usuário é obrigatorio');
  } else {
      setSuccessFor(username);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;

  formControl.classname = 'form-control error';
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.classname = 'form-control success';
}
