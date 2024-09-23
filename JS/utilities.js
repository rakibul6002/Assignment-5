// Common Share Functiion

function getValueByID(id){
  const inputValue=  parseFloat(document.getElementById(id).value);
  return inputValue;
}
function getTextValueByID(id){
  const inputValue=  document.getElementById(id).innerText;
  return inputValue;
}