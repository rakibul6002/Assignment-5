
// Donation-1
document.getElementById('donation-1').addEventListener('click',function(event){
   event.preventDefault();
    
   const inptValue = getValueByID('inpt-1');
   
   const donateValue = parseFloat(getTextValueByID('dnt-balence-1'));
    let balence = donateValue + inptValue ;
   document.getElementById('dnt-balence-1').innerText = balence;
    
   const mainBalence = parseFloat(getTextValueByID('main-balence'));
   let updateBalence = mainBalence - inptValue;
   document.getElementById('main-balence').innerText = updateBalence;
   
   
    
    
    
    
})
// Donation-2
document.getElementById('donation-2').addEventListener('click',function(event){
   event.preventDefault();
    
   const inptValue = getValueByID('inpt-2');
   
   const donateValue = parseFloat(getTextValueByID('dnt-balence-2'));
    let balence = donateValue + inptValue ;
   document.getElementById('dnt-balence-2').innerText = balence;
    
   const mainBalence = parseFloat(getTextValueByID('main-balence'));
   let updateBalence = mainBalence - inptValue;
   document.getElementById('main-balence').innerText = updateBalence;
   
   
    
    
    
    
})
// Donation-3
document.getElementById('donation-3').addEventListener('click',function(event){
   event.preventDefault();
    
   const inptValue = getValueByID('inpt-3');
   
   const donateValue = parseFloat(getTextValueByID('dnt-balence-3'));
    let balence = donateValue + inptValue ;
   document.getElementById('dnt-balence-3').innerText = balence;
    
   const mainBalence = parseFloat(getTextValueByID('main-balence'));
   let updateBalence = mainBalence - inptValue;
   document.getElementById('main-balence').innerText = updateBalence;
   
   
    
    
    
    
})