const button = document.getElementById('Agendamento');
const modal = document.querySelector('.modals')
button.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.classList.add('modal');
}) 
