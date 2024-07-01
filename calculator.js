let calculation = localStorage.getItem('calculation') || '';
  displayCalculation()

function updateCalculation(value){
  calculation += value;
  displayCalculation();
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}
function displayCalculation () {
  let display = document.querySelector('.calculator-display');
  display.innerHTML = calculation;
}
function evalCalculation () {
  calculation = eval(calculation);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}
function clearCalculation () {
  calculation = '';
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}