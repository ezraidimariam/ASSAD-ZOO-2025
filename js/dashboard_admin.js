// Activer / désactiver utilisateur
const toggleUserButtons = document.querySelectorAll('.btn-toggle-user');
toggleUserButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const userId = btn.dataset.userId;
        alert(`Changement statut pour l'utilisateur ${userId}`);
        // Ici tu peux appeler ton backend via fetch/AJAX
    });
});

// Filtrer les animaux
const filterAnimalAdmin = document.querySelector('#filter-animal-admin');
if(filterAnimalAdmin){
    filterAnimalAdmin.addEventListener('change', () => {
        console.log('Filtre admin animaux:', filterAnimalAdmin.value);
    });
}
