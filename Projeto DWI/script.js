/* Menu haburguer */

let show = true;

const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show = !show;
})


/* focar cardapio */

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelector(".cardapio")

myObserver.observe(cardapio)


/* Gerar alert do cupom de desconto */

const botaoAlert = document.querySelector('.reservar');

botaoAlert.addEventListener('click', () => {
    alert('Cole o cupom "COELHO15" e ganhe 15% de desconto na primeira compra conosco!!')
})