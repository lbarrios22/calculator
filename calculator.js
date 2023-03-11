window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}



// Get the inputs from the DOM
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.querySelector('#loan-amount');
  const years = document.querySelector('#loan-years');
  const rate = document.querySelector('#loan-rate');
  amount.value = 20000;
  years.value = 5;
  rate.value = 2.4;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  return updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const totalNumPayments = Math.floor(values.years * 12);
  return  ((monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -totalNumPayments))).toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const showMonthly = document.querySelector('#monthly-payment')
  showMonthly.innerText = `Your monthly payment is: $${monthly}`
}
