document.getElementById('loan-form').addEventListener('submit', calculateResult)

function calculateResult(e) {
  console.log('Calculating..')
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12 ;

  // Compute monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal*x*calculateInterest)/(x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
  } else {
    // console.log('Please check Your Number');
    showError('Please check your numbers');
  }

  e.preventDefault();
}

function showError(error) {
  // Create a div 
  const errorDiv = document.createElement('div');

  // Get Elements
  const content = document.querySelector('.content');
  const heading = document.querySelector('.heading');

  // Add Class
  errorDiv.className = 'alert alert-danger';

  // Style div
  const style = errorDiv.style;
  style.color = 'palevioletred ';
  style.backgroundColor = 'rgb(247, 206, 213)';
  style.fontSize = '0.6rem';
  style.letterSpacing = '0.4px';
  style.padding = '0.4rem';
  style.textAlign = 'center';
 
 // Create Text node and append to div
 errorDiv.appendChild(document.createTextNode(error));

 // Insert error above heading
 content.insertBefore(errorDiv, heading);

 // Clear Error after 2 seconds
 setTimeout(clearError, 2000);
 
}

// Celar error 
function clearError(){
  document.querySelector('.alert').remove();
}