// FORM VALIDATION

// GETTING ALL INPUT TEXT OBJECTS
var firstName = document.querySelector("#name");
console.log(firstName);
var surname = document.querySelector("#surname");
console.log(surname);
var address = document.querySelector("#address");
var cardHolder = document.querySelector("#card-holder-name");



// GETTING ALL ERROR DISPLAY OBJECTS
var firstNameError = document.getElementById("name-error");
var surnameError = document.getElementById("surname-error");
var addressError = document.getElementById("address-error");
var cardHolderError = document.getElementById("card-holder-error");


eventListeners();

// SETTING ALL EVENT LISTENERS

function eventListeners() {
  firstName.addEventListener("blur", firstNameVerify);
  surname.addEventListener("blur", surnameVerify);
  address.addEventListener("blur", addressVerify);
  cardHolder.addEventListener("blur", cardHolderVerify);
}



// VALIDATION FUNCTION
function Validate() {

  if (!(/^[a-zA-Z]+$/.test(firstName.value))) {
    console.log(firstName.value)
    firstName.style.border = "2px solid red";
    firstNameError.style.color = "red";
    firstNameError.style.paddingLeft = "10px";
    firstNameError.textContent = "Invalid name";
    firstName.focus();
    return false;
  }
  else if (!(/^[a-zA-Z]+$/.test(surname.value))) {
    surname.style.border = "2px solid red";
    surnameError.style.color = "red";
    surnameError.style.paddingLeft = "10px";
    surnameError.textContent = "Invalid surname";
    surname.focus();
    return false;
  }

  else if (address.value == "" ) {
    address.style.border = "2px solid red";
    addressError.style.color = "red";
    addressError.style.paddingLeft = "10px";
    addressError.textContent = "Address is required";
    address.focus();
    return false;
  }

  else if (!(/^[a-zA-Z]+$/.test(cardHolder.value))) {
    cardHolder.style.border = "2px solid red";
    cardHolderError.style.color = "red";
    cardHolderError.style.paddingLeft = "10px";
    cardHolderError.textContent = "Invalid card holder name";
    cardHolder.focus();
    return false;
  }
}

function firstNameVerify() {
  if ((/^[a-zA-Z]+$/.test(firstName.value))) {
    console.log(firstNameError.innerHTML);
    firstName.style.border = "2px solid lime";
    firstNameError.innerHTML = "";
    return true;
  }
}

function surnameVerify() {
  if ((/^[a-zA-Z]+$/.test(surname.value))) {
    surname.style.border = "2px solid lime";
    surnameError.innerHTML = "";
    return true;
  }
}

function addressVerify() {
  if (address.value != "") {
    address.style.border = "2px solid lime";
    addressError.innerHTML = "";
    return true;
  }
}

function cardHolderVerify() {
  if ((/^[a-zA-Z]+$/.test(cardHolder.value))) {
    cardHolder.style.border = "2px solid lime";
    cardHolderError.innerHTML = "";
    return true;
  }
}



// CARD VALIDATION AND PAYMENT

var stripe =  Stripe("pk_test_bB40MiwWmhmEQRVuC4X4HISn00Km2vJ7Rf");


var form = document.getElementById('checkout-form');
var elements = stripe.elements();

var style = {
  base: {
   
    fontSize: '16px',
    color: "#000",
  }
};

var card = elements.create('card', {style: style});
card.mount("#card-number");

card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Create a token or display an error when the form is submitted.

form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the customer that there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});

function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('checkout-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);
  console.log(token, token.id);
  // Submit the form
  form.submit();
}



// IF BACK BUTTON PRESSED REDIRECT TO CART

jQuery(document).ready(function($) {

  if (window.history && window.history.pushState) {

    $(window).on('popstate', function() {
      var hashLocation = location.hash;
      var hashSplit = hashLocation.split("#!/");
      var hashName = hashSplit[1];

      if (hashName !== '') {
        var hash = window.location.hash;
        if (hash === '') {
        
            window.location.href ='/shopping-cart';
            return false;
        }
      }
    });

    window.history.pushState('forward', null, './#forward');
  }

});