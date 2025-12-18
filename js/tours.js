// Réservation visite guidée
const reserveButtons = document.querySelectorAll('.btn-reserve');
reserveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tourId = btn.dataset.tourId;
        alert(`Réservation pour la visite ${tourId} en cours...`);
        // Ici tu peux appeler ton backend via fetch/AJAX
    });
});

// Recherche des visites
const searchInput = document.querySelector('#search-tour');
if(searchInput){
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const tourCards = document.querySelectorAll('.tour-card');
        tourCards.forEach(card => {
            const title = card.querySelector('h5').textContent.toLowerCase();
            if(title.includes(query)){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
