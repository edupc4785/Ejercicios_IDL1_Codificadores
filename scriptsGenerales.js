const menuFund = document.querySelector('.menuFund');
const buttonFund = document.querySelector('.fundButton');
const listaFund = document.querySelector('.listaFund');

const menuProy = document.querySelector('.menuProy');
const buttonProy = document.querySelector('.proyButton');
const listaProy = document.querySelector('.listaProy');


menuFund.addEventListener('mouseover', () => {
    buttonFund.classList.toggle('hover');
    listaFund.classList.toggle('oculted');
})

menuFund.addEventListener('mouseout', () => {
    buttonFund.classList.toggle('hover');
    listaFund.classList.toggle('oculted');
})

menuProy.addEventListener('mouseover', () => {
    buttonProy.classList.toggle('hover');
    listaProy.classList.toggle('oculted');
})

menuProy.addEventListener('mouseout', () => {
    buttonProy.classList.toggle('hover');
    listaProy.classList.toggle('oculted');
})
