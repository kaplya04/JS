console.log('hello')
let button = document.querySelector('.btn')
button.addEventListener('click', function(){
    console.log('hello')
})

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

let move = document.querySelector('#move')
move.addEventListener('click', function(e){
    console.log("screenX: " + e.screenX);
    console.log("screenY: " + e.screenY);
    console.log("clientX: " + e.clientX);
    console.log("clientY: " + e.clientY);
})