// History button

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('Donation-btn').classList.remove('bg-lime-400');
    document.getElementById('Donation-btn').classList.add('border-black');
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history-btn').classList.remove('border-black');
    document.getElementById('history-btn').classList.add('bg-lime-400');
    document.getElementById('history').classList.remove('hidden');
    
})
// Donation button

document.getElementById('Donation-btn').addEventListener('click', function(){
    document.getElementById('history-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.add('border-black');
    document.getElementById('history').classList.add('hidden');
    document.getElementById('Donation-btn').classList.remove('border-black');
    document.getElementById('Donation-btn').classList.add('bg-lime-400');
    document.getElementById('donation').classList.remove('hidden');
    
})
