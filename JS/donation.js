
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
   
   // Validetion

   if(inptValue <= 0 || isNaN(inptValue)){
     
      document.getElementById('main-balence').innerText= mainBalence;
      document.getElementById('dnt-balence-1').innerText= donateValue;
      alert('Do not enter a negative number or srting character!!!')
      return;
   }
   else{
      
      // Modal
      modal.classList.remove('hidden');
      // History
   const now = new Date();
   const entry = document.createElement('div');
   entry.innerHTML = `
         <div class="border border-black px-5 py-3 rounded-lg my-2">
            <p class="text-xl font-bold">${inptValue} Taka is Donate for Flood at Noakhali, Bangladesh.</p>
            <p> Date: ${now}</p>
         </div>
   `
   document.getElementById('history').appendChild(entry);
   }
   
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
  
  // Validetion

  if(inptValue <= 0 || isNaN(inptValue)){
   document.getElementById('main-balence').innerText= mainBalence;
   document.getElementById('dnt-balence-2').innerText= donateValue;
   alert('Do not enter a negative number or srting character!!!')
   return;
}
else{
   // Modal
   modal.classList.remove('hidden');
   // History
  const now = new Date();
  const entry = document.createElement('div');
  entry.innerHTML = `
        <div class="border border-black px-5 py-3 rounded-lg my-2">
            <p class="text-xl font-bold">${inptValue} Taka is Donate for Flood at Noakhali, Bangladesh.</p>
            <p> Date: ${now}</p>
         </div>
  `
  document.getElementById('history').appendChild(entry);
   
}
  
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
  
  
   // Validetion

   if(inptValue <= 0 || isNaN(inptValue)){

      document.getElementById('main-balence').innerText= mainBalence;
      document.getElementById('dnt-balence-3').innerText= donateValue;
      alert('Do not enter a negative number or srting character!!!')
      return;
   }
   else{
      // Modal
      modal.classList.remove('hidden');
       // History
   const now = new Date();
   const entry = document.createElement('div');
   entry.innerHTML = `
         <div class="border border-black px-5 py-3 rounded-lg my-2">
            <p class="text-xl font-bold">${inptValue} Taka is Donate for Flood at Noakhali, Bangladesh.</p>
            <p> Date: ${now}</p>
         </div>
   `
   document.getElementById('history').appendChild(entry);
   }
  
})
//   Modal close Button
 const closeModalButtons = document.querySelectorAll('#closeModal');
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
 });

