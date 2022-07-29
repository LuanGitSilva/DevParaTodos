const itens = document.querySelector(".itens");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');

function openMenu() {
    itens.style.height = '170px'
    open.style.display = 'none';
    close.style.display = 'block';
    setTimeout(() => {
        item1.style.display = 'block';
        item2.style.display = 'block';
        item3.style.display = 'block';
        item4.style.display = 'block';
    }, 500);
}

function closeMenu() {
    itens.style.height = '0';
    open.style.display = 'block';
    close.style.display = 'none';
    item1.style.display = 'none';
    item2.style.display = 'none';
    item3.style.display = 'none';
    item4.style.display = 'none';
}