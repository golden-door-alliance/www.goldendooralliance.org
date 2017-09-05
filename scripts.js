var stripe = Stripe('pk_test_9r3MM1jc5TacJk9kNwAOsNg0');
var elements = stripe.elements();

var card = elements.create('card', { style:
  {
    base: {
      lineHeight: '1.429'
    }
  }
});
card.mount('#card-element');
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

var form = document.querySelector('#signup-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card, {
    name: document.querySelector('#billing-name').value,
    address_line1: document.querySelector('#billing-address-line1').value,
    address_line2: document.querySelector('#billing-address-line2').value,
    address_city: document.querySelector('#billing-address-city').value,
    address_state: document.querySelector('#billing-address-state').value,
    address_zip: document.querySelector('#billing-address-zip').value
  }).then(function(result) {
    if (result.error) {
      var errorElement = document.querySelector('#card-errors');
      errorElement.textContent = result.error.message;
    } else {
      stripeTokenHandler(result.token);
    }
  });

  function stripeTokenHandler(token) {
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);

    form.submit();
  }
});

document.forms['signup-form'].addEventListener('change', function(event) {
  if (event.target.name === 'registeredToVote') {
    if (event.target.value === 'no-green-card') {
      document.querySelector('#voting-address').style.display = 'none';
    } else {
      document.querySelector('#voting-address').style.display = 'block';
    }
  }
});
