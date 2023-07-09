var menuItem = document.querySelectorAll('.item-menu');

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo'))
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

// vai expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuTop = document.querySelector('.navbar-top')

btnExp.addEventListener('click', function(){
    menuTop.classList.toggle('expandir');
})