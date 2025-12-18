// Filtrage des animaux par habitat ou pays
const filterSelect = document.querySelector('#filter-animal');
const animalCards = document.querySelectorAll('.animal-card');

if(filterSelect){
    filterSelect.addEventListener('change', () => {
        const value = filterSelect.value.toLowerCase();
        animalCards.forEach(card => {
            const habitat = card.dataset.habitat.toLowerCase();
            const country = card.dataset.country.toLowerCase();
            if(habitat.includes(value) || country.includes(value) || value === 'all'){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
