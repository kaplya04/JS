console.log('hello')
// click
let button = document.querySelector('.btn')
button.addEventListener('click', function(){
    console.log('hello')
})

// mouseover, mouseout
function setColor(e){
    if(e.type==='mouseover')
    e.target.style.backgroundColor = "black"
    else 
    if(e.type==="mouseout")
        e.target.style.backgroundColor = "blue"
}

let click = document.querySelector('.click')
click.addEventListener("mouseover", setColor)
click.addEventListener("mouseout", setColor)

//mousemove
let move = document.querySelector('#move')
move.addEventListener('mousemove', function(e){
    console.log("screenX: " + e.screenX);
    console.log("screenY: " + e.screenY);
    console.log("clientX: " + e.clientX);
    console.log("clientY: " + e.clientY);
})

// Двойной клик
let dva = document.querySelector('#Dblclick')
dva.addEventListener('dblclick', function(){
    alert('Нажал два раза')
})

// keydown, keypress, keyup 
document.addEventListener('keydown', function(){
    console.log('Ввод с клавиатуры')
})
// индентично keydown только альт и ктрл не работают
document.addEventListener('keypress', function(){
    console.log('Не работает с альт и ктрл')
})
// отжатие
document.addEventListener('keyup', function(){
    console.log('Отажатие')
})