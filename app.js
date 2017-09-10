var stripe = Stripe('pk_test_9r3MM1jc5TacJk9kNwAOsNg0');
var elements = stripe.elements();

var form = new Vue({
  el: '#signup-form',
  data: {
    sections: ['contact-info', 'legal', 'voting', 'contributions'],
    currentSection: 0,
    contributor: {
      name: '',
      email: '',
      cellPhone: '',
      timesCallRepresentatives: '',
      fullLegalName: '',
      occupation: '',
      employer: '',
      voteStatus: '',
      votingAddressLine1: '',
      votingAddressLine2: '',
      votingCity: '',
      votingState: '',
      votingZip: '',
      contributionAmount: '',
      cardNumber: '',
      nameOnCard: '',
      billingSameAtVoting: false,
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingCity: '',
      billingState: '',
      billingZip: ''
    }
  },
  methods: {
    isSectionActive(section) {
      return this.sections[this.currentSection] == section;
    },
    goNextSection() {
      this.currentSection++;
    },
    goPreviousSection() {
      this.currentSection--;
    },
    validateSection(currentSectionId) {
      this.goNextSection();
    }
  },
  created() {
    var card = elements.create('card', { style:
      {
        base: {
          'lineHeight': '1.35',
          'fontSize': '1.11rem',
          'color': '#495057',
          'fontFamily': 'apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
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
  }
});
