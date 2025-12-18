// Ajouter étape de visite
const addStepBtn = document.querySelector('#add-step');
if(addStepBtn){
    addStepBtn.addEventListener('click', () => {
        const stepsContainer = document.querySelector('#steps-container');
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';
        stepDiv.innerHTML = `<input type="text" placeholder="Titre étape">
                             <textarea placeholder="Description étape"></textarea>`;
        stepsContainer.appendChild(stepDiv);
    });
}

// Afficher réservations
const showReservationsBtn = document.querySelectorAll('.btn-show-reservations');
showReservationsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const tourId = btn.dataset.tourId;
        alert(`Afficher réservations pour la visite ${tourId}`);
        // Ici fetch/AJAX pour récupérer la liste
    });
});
