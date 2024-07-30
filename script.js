'use strict';

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const image = card.querySelector('.image');
    const hoverBtn = document.createElement('button');
    hoverBtn.classList.add('hover-btn');
    hoverBtn.innerHTML = '<img src="assets/icons/play.svg" alt=""></img>';
    image.appendChild(hoverBtn);
    card.addEventListener('mouseover', () => image.classList.add('hc'));
    card.addEventListener('mouseout', () => image.classList.remove('hc'));
}
);