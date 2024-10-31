let BtnAll = document.getElementById('BtnAll');
let BtnPhone = document.getElementById('BtnPhone');
let BtnClothes = document.getElementById('BtnClothes');
let cardPhones = document.querySelectorAll('.cardPhone');
let cardClothes = document.querySelectorAll('.cardClothes');
const cards = document.querySelectorAll('.cards img');
let BtnGlasses = document.getElementById('BtnGlasses');
let cardGlasses = document.querySelectorAll('.cardGlasses');
// Prikazati sve kartice
BtnAll.addEventListener('click', function() {
    cardPhones.forEach(card => {
        card.style.display = 'block';
    });
    cardClothes.forEach(card => {
        card.style.display = 'block';
    });
    cardGlasses.forEach(card => {
        card.style.display = 'block';
    });

});

// Prikazati samo telefonske kartice
BtnPhone.addEventListener('click', function() {
    cardPhones.forEach(card => {
        card.style.display = 'block';
    });
    cardClothes.forEach(card => {
        card.style.display = 'none';
    });
    cardGlasses.forEach(card => {
        card.style.display = 'none';
    });

});

// Prikazati samo kartice za odeću
BtnClothes.addEventListener('click', function() {
    cardClothes.forEach(card => {
        card.style.display = 'block';
    });
    cardPhones.forEach(card => {
        card.style.display = 'none';
    });
    cardGlasses.forEach(card => {
        card.style.display = 'none';
    });
    
});


BtnGlasses.addEventListener('click', function() {
    cardGlasses.forEach(card => {
        card.style.display = 'block';
    });
    cardPhones.forEach(card => {
        card.style.display = 'none';
    });
    cardClothes.forEach(card => {
        card.style.display = 'none';
    });
    
});


let lightBox = document.getElementById('lightBox');
let lightBoxImage = document.getElementById('lightBoxImage');

cards.forEach(img => {
    img.addEventListener('click', () => {
        lightBox.classList.add('visible'); // Prikazujemo lightbox
        lightBoxImage.src = img.src; // Postavljamo sliku u lightbox
    });
});


// Zatvaranje lightbox-a na klik
lightBox.addEventListener('click', function() {
    lightBox.classList.remove('visible'); // Uklanjanje klase za skrivanje
});